import {TitlePropsType} from "../types/types";

export default function PageTitle({title}: TitlePropsType) {
	return <h3 className="text-lg font-medium leading-6 text-gray-900 text-center md:text-left">{title}</h3>
}
