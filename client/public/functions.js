jQuery(function ($) {
	/*  ==========================================================================
		Globals
		========================================================================== */
	var px_block_width = 202;
	var int_block_total = 4;
	var px_dotborder_width = 4;
	var px_tooltip_arrow_width = 20;
	var px_line_width = 20;
	var array_timeouts = new Array();
	var px_md_width = 768;
	var flag = false;

	/*  ==========================================================================
		Post-DOM Routine
		========================================================================== */
	$(document).ready(function () {
		resizeLayout();
		setTimeout(resizeLayout, 500);

		$(window).resize(function () {
			resizeLayout();
		});

		// Binding Functions: FAQ
		$(".faq .faq-table a.question").click(function () {
			if ($(this).hasClass("active")) {
				$(".faq .faq-table .answer").slideUp(250);
				$(".faq .faq-table a.question.active").removeClass("active");
			} else {
				$(".faq .faq-table .answer").slideUp(250);
				$(".faq .faq-table a.question.active").removeClass("active");
				$(this).parent().find(".answer").slideDown(250);
				$(this).addClass("active");
			}
			return false;
		});

		// Binding Functions: Industry
		$(".industry .tabs li a").click(function () {
			if ($(this).hasClass("active")) {
				$(".industry .tab-content .text").slideUp(250);
				$(".industry .tabs li a.active").removeClass("active");
			} else {
				$(".industry .tab-content .text").slideUp(250);
				$(".industry .tabs li a.active").removeClass("active");
				$(".industry .tab-content .text")
					.eq($(this).parent().index())
					.slideDown(250);
				$(this).addClass("active");
			}
			return false;
		});

		// Binding Functions: Tooltips
		$(".tooltipped .tooltip-toggle").click(function () {
			//report("[t] Tooltip clicked: " + $(this).parent().attr("data-slug"));
			var obj_tooltip = $(this).parent().find(".tooltip");
			if (obj_tooltip.is(":visible")) {
				obj_tooltip.fadeOut(100);
			} else {
				$(".tooltip").hide();
				obj_tooltip.fadeIn(250);
			}
			return false;
		});
		$(".tooltipped .tooltip .tooltip-box .close").click(function () {
			$(this).parent().parent().fadeOut(100);
			return false;
		});

		// Binding Functions: Route Items
		$("#map .routes a.route-item").click(function () {
			//report("[→] Route item clicked: " + $(this).attr("data-slug"));
			resetPoints();

			// Tab Action
			if ($(this).parent().hasClass("tab")) {
				openTab($(this).attr("data-slug"));
			}

			// Subroute Action
			if ($(this).hasClass("subroute")) {
				$(this)
					.parent()
					.parent()
					.find(".subroute.active")
					.removeClass("active");
				$(this).addClass("active");
			}

			// Item Action
			switch ($(this).attr("data-type")) {
				case "careerPath":
					//report("[→] Plot career path: " + $(this).attr("data-careerpath"));
					$("#map .map-grid").addClass("locked");
					$("#map .map-grid").removeClass("with-titles");
					$("#map .map-grid .point").removeClass("dimmed");
					var array_points = $(this).attr("data-careerpath").split("|");
					var array_tooltips = $(this).attr("data-tooltips").split("|");
					for (i = 0; i < array_points.length; i++) {
						plotPathPoint(
							array_points[i],
							array_points[i + 1],
							array_tooltips[i + 1],
							i * 1000
						);
					}
					break;

				case "jobList":
					//report("[→] Plot job list: " + $(this).attr("data-joblist"));
					$("#map .map-grid").addClass("locked");
					$("#map .map-grid").addClass("with-titles");
					$("#map .map-grid .point").removeClass("dimmed");
					var array_points = $(this).attr("data-joblist").split("|");
					for (i = 0; i < array_points.length; i++) {
						plotPoint(array_points[i], i * 250);
					}
					break;

				case "freeform":
					$("#map .map-grid").removeClass("locked");
					$("#map .map-grid").removeClass("with-titles");
					$("#map .map-grid .point").removeClass("dimmed");
					break;
			}
			return false;
		});

		// Binding Functions: Map Grid
		$(".guard").click(function () {
			resetPoints();
			return false;
		});
		$("#map .map-grid .point a.square").hover(
			function () {
				if (
					!$(this).parent().hasClass("selected") &&
					!$("#map .map-grid").hasClass("locked")
				) {
					//report("[○] Point hover on: " + $(this).parent().attr("data-slug"));
					activatePoint($(this).parent());
				} else if (
					$(this).parent().hasClass("active") &&
					$("#map .map-grid").hasClass("with-titles")
				) {
					report();
					//"[○] Point title hover on: " + $(this).parent().attr("data-slug")
					$("#map .map-grid .point").addClass("dimmed");
					$(this).parent().removeClass("dimmed");
					activatePointTitle($(this).parent());
				}
			},
			function () {
				if (
					!$(this).parent().hasClass("selected") &&
					!$("#map .map-grid").hasClass("locked")
				) {
					//report("[○] Point hover off: " + $(this).parent().attr("data-slug"));
					deactivatePoint($(this).parent());
				} else if (
					$(this).parent().hasClass("active") &&
					$("#map .map-grid").hasClass("with-titles")
				) {
					report();
					//	"[○] Point title hover off: " + $(this).parent().attr("data-slug")
					$("#map .map-grid .point").removeClass("dimmed");
					deactivatePointTitle($(this).parent());
				}
			}
		);

		$("#map .map-grid .point a.square").click(function () {
			if ($("#map .map-grid").hasClass("locked")) {
				$("#map .routes a.route-item[data-type='freeform']").click();
				$(this).click();
			} else {
				if ($(this).parent().hasClass("selected") && flag) {
					report();
					//"[○] Point clicked to close: " + $(this).parent().attr("data-slug")
					$(".guard").hide();
					//deselectPoint($(this).parent());
				} else {
					//report("[○] Point clicked to open: " + $(this).parent().attr("data-slug"));
					$(".guard").show();
					if ($("#map .map-grid .point.selected").length) {
						deselectPoint($("#map .map-grid .point.selected"));
					}
					selectPoint($(this).parent());
				}
			}
			return false;
		});
		$("#map .map-grid .point .description .description-box a.close").click(
			function () {
				//report("[○] X clicked to close: " + $(this).parent().parent().parent().attr("data-slug"));
				deselectPoint($(this).parent().parent().parent());
				return false;
			}
		);

		$("body").removeClass("preload");

		//report("[•] Post-DOM Routine complete.");
	});

	/*  ==========================================================================
		Binding Functions
		========================================================================== */
	function resizeLayout() {
		px_width_window = $(window).width();
		px_height_window = $(window).height();

		// Size Elements
		px_block_width = $("#map .map-row .block").width();
		$("#map .map-row .block").height(px_block_width);
		$("#map .map-grid").width(px_block_width * int_block_total);
		$("#map .map-grid").height(px_block_width * 3);
		$("#map .map-grid .point a.square").width(
			px_block_width / int_block_total / 2
		);
		$("#map .map-grid .point a.square").height(
			px_block_width / int_block_total / 2
		);
		$("#map .map-grid .point a.square").css("marginTop", px_block_width / 24);
		$("#map .map-grid .point a.square").css("marginLeft", px_block_width / 24);
		$("#map .map-grid .point a.square .dot").width(px_block_width / 6);
		$("#map .map-grid .point a.square .dot").height(px_block_width / 6);
		$("#map .map-grid .point a.square .dot").css("top", px_block_width / 12);
		$("#map .map-grid .point a.square .dot").css("left", px_block_width / 12);
		$("#map .map-grid .point a.square .border").width(px_block_width / 8);
		$("#map .map-grid .point a.square .border").height(px_block_width / 8);
		$("#map .map-grid .point a.square .border").css(
			"top",
			px_block_width / 12 - px_dotborder_width
		);
		$("#map .map-grid .point a.square .border").css(
			"left",
			px_block_width / 12 - px_dotborder_width
		);
		$("#map .map-grid .point .title").width(px_block_width * 0.75);
		$("#map .map-grid .point .description").width(px_block_width * 1.25);
		$("#map .map-row .row-label").height(px_block_width);
		$("#map .map-row .col-label .tail.left").css(
			"borderWidth",
			px_block_width / int_block_total +
				"px " +
				px_block_width / 2.04 +
				"px 0 0"
		);
		$("#map .map-row .col-label .tail.right").css(
			"borderWidth",
			"0 " +
				px_block_width / 2.04 +
				"px " +
				px_block_width / int_block_total +
				"px 0"
		);
		$("#map .map-row .axis-label").css(
			"paddingTop",
			px_block_width / int_block_total
		);
		$("#map .map-row .row-label .title").css("width", px_block_width);
		$("#map .map-row .row-label .title").css("marginLeft", -px_block_width);
		$("#map .map-row .row-label .title").css(
			"lineHeight",
			$("#map .map-row .row-label").width() + "px"
		);

		// Deactivate Selections
		if ($("#map .map-grid .point.selected").length) {
			deselectPoint($("#map .map-grid .point.selected"));
		}

		// Height Sync Elements
		$(".h-sync").each(function () {
			$(this).parent().attr("data-h-sync-px", 0);
		});
		$(".h-sync").each(function () {
			var px_height = parseInt($(this).parent().attr("data-h-sync-px"));
			$(this).css("height", "auto");
			if ($(this).innerHeight() > px_height) {
				px_height = $(this).innerHeight();
			}
			$(this).parent().attr("data-h-sync-px", px_height);
			$(this).parent().find("> .h-sync").css("height", px_height);
			$(this).parent().find("> .h-sync").addClass("h-sync-set");
		});

		$(".h-sync-md").each(function () {
			$(this).parent().attr("data-h-sync-md-px", 0);
		});
		$(".h-sync-md").each(function () {
			$(this).css("height", "auto");
			if (px_width_window > px_md_width) {
				var px_height = parseInt($(this).parent().attr("data-h-sync-md-px"));
				if ($(this).innerHeight() > px_height) {
					px_height = $(this).innerHeight();
				}
				$(this).parent().attr("data-h-sync-md-px", px_height);
				$(this).parent().find("> .h-sync-md").css("height", px_height);
			}
			$(this).parent().find("> .h-sync-md").addClass("h-sync-md-set");
		});

		// Vertical Center Element
		$(".y-center").each(function () {
			$(this).css("top", 0);
		});
		$(".y-center").each(function () {
			var px_padding = ($(this).parent().height() - $(this).innerHeight()) / 2;
			$(this).css("top", px_padding);
			$(this).addClass("y-center-set");
		});

		$(".y-center-md").each(function () {
			$(this).css("top", 0);
		});
		$(".y-center-md").each(function () {
			$(this).css("height", "auto");
			if (px_width_window > px_md_width) {
				var px_padding =
					($(this).parent().height() - $(this).innerHeight()) / 2;
				$(this).css("top", px_padding);
			}
			$(this).addClass("y-center-md-set");
		});

		vertMatch();
	}

	/*  ==========================================================================
		Map Functions
		========================================================================== */
	function plotPoint(slug_point, ms_delay) {
		//report("[○] plotPoint: " + slug_point);
		array_timeouts[array_timeouts.length] = setTimeout(function () {
			activatePoint(
				$("#map .map-grid .point[data-slug='" + slug_point + "']"),
				false
			);
		}, ms_delay);
	}

	function plotPathPoint(slug_point1, slug_point2, str_tooltip, ms_delay) {
		//report("[○] plotPathPoint: " + slug_point1 + " to " + slug_point2);
		array_timeouts[array_timeouts.length] = setTimeout(function () {
			activatePoint(
				$("#map .map-grid .point[data-slug='" + slug_point1 + "']")
			);
			drawLine(slug_point1, slug_point2, str_tooltip, 100);
		}, ms_delay);
	}

	function activatePoint(obj_point, bool_title) {
		//report("[○] activatePoint: " + obj_point.attr("data-slug"));
		$(
			"#sidebar .subnav a[data-slug='" + obj_point.attr("data-slug") + "']"
		).addClass("active");
		$("#map .map-grid .point a.square .dot").addClass("dimmed");
		obj_point.addClass("active");
		obj_point.find(".square .dot").width(px_block_width / 4);
		obj_point.find(".square .dot").height(px_block_width / 4);
		obj_point.find(".square .dot").css("top", px_block_width / 24);
		obj_point.find(".square .dot").css("left", px_block_width / 24);
		obj_point.find(".square .border").width(px_block_width / 8);
		obj_point.find(".square .border").height(px_block_width / 8);
		obj_point
			.find(".square .border")
			.css("top", px_block_width / 24 - px_dotborder_width);
		obj_point
			.find(".square .border")
			.css("left", px_block_width / 24 - px_dotborder_width);
		if (bool_title != false) {
			activatePointTitle(obj_point);
		}
	}

	function activatePointTitle(obj_point) {
		// Title Positioning
		if (obj_point.hasClass("x40-residential")) {
			obj_point.find(".title").css("left", -(px_block_width * 0.75));
			obj_point.find(".title").css("textAlign", "right");
		} else {
			obj_point.find(".title").css("left", px_block_width / 3);
		}
		obj_point
			.find(".title")
			.css("top", px_block_width / 6 - obj_point.find(".title").height() / 2);
		obj_point.find(".title").stop().fadeIn(500);
		obj_point.addClass("title-display");
	}

	function deactivatePoint(obj_point) {
		//report("[○] deactivatePoint: " + obj_point.attr("data-slug"));
		if (!$("#map .map-grid").hasClass("selected")) {
			$("#map .map-grid .point a.square .dot").removeClass("dimmed");
		}
		$(
			"#sidebar .subnav a[data-slug='" + obj_point.attr("data-slug") + "']"
		).removeClass("active");
		obj_point.removeClass("active");
		obj_point.find(".square .dot").width(px_block_width / 6);
		obj_point.find(".square .dot").height(px_block_width / 6);
		obj_point.find(".square .dot").css("top", px_block_width / 12);
		obj_point.find(".square .dot").css("left", px_block_width / 12);
		obj_point.find(".square .border").height(px_block_width / 6);
		obj_point.find(".square .border").width(px_block_width / 6);
		obj_point
			.find(".square .border")
			.css("left", px_block_width / 12 - px_dotborder_width);
		obj_point
			.find(".square .border")
			.css("top", px_block_width / 12 - px_dotborder_width);
		deactivatePointTitle(obj_point);
	}

	function deactivatePointTitle(obj_point) {
		obj_point.removeClass("title-display");
		obj_point.find(".title").stop().fadeOut(0);
	}

	function selectPoint(obj_point) {
		activatePoint(obj_point);
		$("#map .map-grid").addClass("selected");
		obj_point.addClass("selected");
		$("#map .map-grid").not(obj_point).removeClass("selected");
		//$(
		//	"#sidebar .subnav a[data-slug='" + obj_point.attr("data-slug") + "']"
		//).addClass("selected");
		obj_point.find(".title").stop().fadeOut(0);
		obj_point.find(".description").css("display", "block");
		// Description X Positioning
		if (obj_point.hasClass("x10-architecture")) {
			obj_point.find(".description").css("left", 8);
			obj_point.find(".description .description-box").addClass("arrow-left");
		} else if (obj_point.hasClass("x40-residential")) {
			obj_point
				.find(".description")
				.css(
					"left",
					-(px_block_width * 1.25 - px_block_width / int_block_total) + 16
				);
			obj_point.find(".description .description-box").addClass("arrow-right");
		} else {
			obj_point.find(".description").css("left", -(px_block_width / 2 - 7));
			obj_point.find(".description .description-box").addClass("arrow-center");
		}
		// Description Y Positioning
		obj_point.find(".description").css("top", px_block_width / 3);
		obj_point.find(".description .description-box").addClass("arrow-top");
		obj_point.find(".description").animate({ opacity: 1 }, 100);
		// Line Positioning
		if (obj_point.attr("data-routes") != undefined) {
			var array_routes = obj_point.attr("data-routes").split("|");
			var array_tooltips = obj_point.attr("data-tooltips").split("|");
			for (i = 0; i < array_routes.length; i++) {
				drawLine(
					obj_point.attr("data-slug"),
					array_routes[i],
					array_tooltips[i],
					i * 250
				);
			}
		}
	}

	function deselectPoint(obj_point) {
		//report("[○] deselectPoint: " + obj_point.attr("data-slug"));
		$("#map .map-grid").removeClass("selected");
		obj_point.removeClass("selected");
		$(
			"#sidebar .subnav a[data-slug='" + obj_point.attr("data-slug") + "']"
		).removeClass("selected");
		obj_point.find(".description").css("display", "none");
		obj_point.find(".description").css("opacity", 0);
		$("#map .map-grid .line").remove();
		$("#map .map-grid .tooltip").remove();
		$("#map .map-grid .point").removeClass("routed");
		deactivatePoint(obj_point);
	}

	function drawLine(slug_point1, slug_point2, str_tooltip, ms_delay) {
		/*var obj_point1 = $(
			"#map .map-grid .point[data-slug='" + slug_point1 + "']"
		); */
		var obj_point1 = $(
			"#map .map-grid .point.selected[data-slug='" + slug_point1 + "']"
		);
		var y_point1 =
			parseInt(obj_point1.css("top")) + px_block_width / 6 - px_line_width / 2;
		var x_point1 = parseInt(obj_point1.css("left")) + px_block_width / 6;
		var obj_point2 = $(
			"#map .map-grid .point[data-slug='" + slug_point2 + "']"
		);
		var y_point2 =
			parseInt(obj_point2.css("top")) + px_block_width / 6 - px_line_width / 2;
		var x_point2 = parseInt(obj_point2.css("left")) + px_block_width / 6;
		var px_length = Math.sqrt(
			(x_point1 - x_point2) * (x_point1 - x_point2) +
				(y_point1 - y_point2) * (y_point1 - y_point2)
		);
		var deg_angle =
			(Math.atan2(y_point2 - y_point1, x_point2 - x_point1) * 180) / Math.PI;

		var obj_new_line = $("<a>")
			.delay(ms_delay + 100)
			.appendTo("#map .map-grid")
			.addClass("line")
			.attr("data-slug", slug_point1 + "-to-" + slug_point2)
			.css({
				display: "block",
				top: y_point1 - 10,
				left: x_point1 - 10,
				transform: "rotate(" + deg_angle + "deg)",
			})
			.animate({ width: px_length }, 500);

		var obj_new_tooltip = $("<div>")
			.delay(ms_delay + 600)
			.appendTo("#map .map-grid")
			.addClass("tooltip")
			.attr("data-slug", slug_point1 + "-to-" + slug_point2);
		if (str_tooltip != "") {
			var obj_new_tooltip_box = $("<div>")
				.delay(ms_delay + 600)
				.appendTo(obj_new_tooltip)
				.addClass("tooltip-box")
				.html(str_tooltip);
			var y_midpoint = (y_point1 + y_point2) / 2;
			var x_midpoint = (x_point1 + x_point2) / 2;
			var y_tooltip;
			var x_tooltip;
			obj_new_tooltip.width(px_block_width * 0.75);
			if (deg_angle < -45 && deg_angle > -135) {
				y_tooltip = y_midpoint - obj_new_tooltip.height() / 3;
				obj_new_tooltip.addClass("arrow-side");
			} else {
				y_tooltip = y_midpoint - obj_new_tooltip.height();
				obj_new_tooltip.addClass("arrow-bottom");
			}
			if (
				(deg_angle >= 0 && deg_angle <= 180) ||
				(deg_angle <= -135 && deg_angle >= -180) ||
				(deg_angle <= 0 && deg_angle >= -45)
			) {
				x_tooltip = x_midpoint - obj_new_tooltip.width() / 2;
				obj_new_tooltip.addClass("arrow-center");
			} else {
				if (x_midpoint > $("#map .map-grid").width() / 2) {
					x_tooltip =
						x_midpoint - obj_new_tooltip.outerWidth() - px_tooltip_arrow_width;
					obj_new_tooltip.addClass("arrow-right");
				} else {
					x_tooltip = x_midpoint + px_tooltip_arrow_width;
					obj_new_tooltip.addClass("arrow-left");
				}
			}
			obj_new_tooltip.css({ top: y_tooltip, left: x_tooltip });
		}
		obj_new_tooltip.hover(
			function () {
				report("[/] Line tooltip hover on: " + $(this).attr("data-slug"));
				$(
					"#map .map-grid .line[data-slug='" + $(this).attr("data-slug") + "']"
				).addClass("active");
				$(this).show();
			},
			function () {
				//report("[/] Line tooltip hover off: " + $(this).attr("data-slug"));
				$(
					"#map .map-grid .line[data-slug='" + $(this).attr("data-slug") + "']"
				).removeClass("active");
				$(this).stop().fadeOut(0);
			}
		);
		obj_point1.addClass("routed");
		delayAddClass(obj_point2, "routed", ms_delay + 400);
	}

	function resetPoints() {
		clearArrayTimeouts();
		$(".guard").hide();
		$("#map .map-grid .point.selected").each(function () {
			deselectPoint($(this));
		});
		$("#map .map-grid .point.active").each(function () {
			deselectPoint($(this));
		});
	}

	function openTab(str_slug) {
		$("#map .routes ul.tabs li.tab a.active").removeClass("active");
		$("#map .routes .tab-content").slideUp(500);
		$("#map .routes .tab-content[data-slug='" + str_slug + "']").slideDown(500);
		$("#map .routes ul.tabs li.tab a[data-slug='" + str_slug + "']").addClass(
			"active"
		);
		if (
			$("#map .routes .tab-content[data-slug='" + str_slug + "'] .subroutes")
				.length
		) {
			$(
				"#map .routes .tab-content[data-slug='" +
					str_slug +
					"'] .subroutes .route-item:first"
			).click();
		}
	}

	/*  ==========================================================================
		Utility Functions
		========================================================================== */
	function vertMatch() {
		$(".vert-match").each(function () {
			for (i = 1; i <= 5; i++) {
				if ($(this).find(".vert-match-box-" + i).length) {
					$(this)
						.find(".vert-match-box-" + i)
						.css("height", "auto");
					$(this)
						.find(".vert-match-box-" + i + " .vcenter")
						.css("paddingTop", 0);
					px_height = 0;
					$(this)
						.find(".vert-match-box-" + i)
						.each(function () {
							if ($(this).innerHeight() > px_height) {
								px_height = $(this).innerHeight();
							}
						});
					$(this)
						.find(".vert-match-box-" + i)
						.css("height", px_height);
					$(this)
						.find(".vert-match-box-" + i)
						.each(function () {
							if ($(this).find(".vcenter").length) {
								obj_vcenter = $(this).find(".vcenter");
								obj_vcenter.css(
									"paddingTop",
									(px_height - obj_vcenter.height()) / 2
								);
							}
						});
				}
			}
		});
	}
	function report(str) {
		if (typeof console != "undefined") {
			str += "";
			if (str.substr(0, 3) == "[!]") {
				alert(str);
			} else if (str.substr(0, 1) == "[") {
				console.log(str);
			} else {
				console.log("[ ] " + str);
			}
		}
	}
	function clearArrayTimeouts() {
		for (var i = 0; i < array_timeouts.length; i++) {
			clearTimeout(array_timeouts[i]);
		}
	}
	function delayAddClass(obj, str_class, ms_delay) {
		array_timeouts[array_timeouts.length] = setTimeout(function () {
			obj.addClass(str_class);
		}, ms_delay);
	}
});
