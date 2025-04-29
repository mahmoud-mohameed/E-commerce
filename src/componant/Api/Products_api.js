
import axios from "axios";
import { fetchCategoriesStart } from "../../rtk/appSlice";




export const fetchCategories = () => async (dispatch) => {
    const response = await axios.get("/data/api.json");
    dispatch(fetchCategoriesStart(response.data.data));
}