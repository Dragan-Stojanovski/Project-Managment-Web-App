import { Helmet } from "react-helmet";

export interface ISetMetaInfo {
	title: string;
	description: string;
}

const SetMetaInfo = ({ title, description }: ISetMetaInfo) => {
	return (
		<Helmet>
			<title>{title + " " + "|" + " " + "LMIA"} </title>
			<meta name="description" content={description} />
		</Helmet>
	);
};

export default SetMetaInfo;
