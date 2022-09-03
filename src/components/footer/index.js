
import Info from './Info'
import Media from './Media'

function Footer() {
  return (
    <div className="flex flex-row justify-between pt-2 mb-2 mt-8 border-t	divide-slate-400">
     <Info/>
     <Media/>
    </div>
  )
}

export default Footer