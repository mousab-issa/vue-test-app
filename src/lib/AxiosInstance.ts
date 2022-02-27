import END_POINTS from "@/config/END_POINTS";
import axios from "axios";

export default axios.create({
  baseURL: END_POINTS.BASE_URL,
  timeout: 1000,
});
