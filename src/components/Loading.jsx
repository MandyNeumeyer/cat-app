import CatLoader from '../assets/cat-loading.gif'
import './Loading.scss'

const Loading = () => {
  return (
    <div className='Loading'>
        <img src={CatLoader} />
    </div>
  )
}

export default Loading