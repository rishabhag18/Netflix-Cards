import seriesData from "../api/netflixSeries.json";
import SeriesCard from "./SeriesCard";
const NetflixSeries = () => {
    return (<ul className="grid grid-three--cols">
        {
            seriesData.map((series)=>{
                return (<SeriesCard data={series} key={series.id}/>)
            })
        }
    </ul> 
    )
}
export default NetflixSeries;