import { useParams } from "react-router-dom"

const FeaturePage = () => {
  const id = useParams().id
  return <div>feature: {id}</div>
}

export default FeaturePage
