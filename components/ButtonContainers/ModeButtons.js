import { useContext } from "react"
import { GlobalContext } from "contexts/context"
import stateMeta from "contexts/state-meta"

export default function ModeButtons( props ) {
  // eslint-disable-next-line no-unused-vars
  const [mode, setMode] = useContext(GlobalContext)
  const meta = stateMeta();

  return (
    <>
     <div className="w-full mb-0 px-4 py-3 bg-blueGray-600 flex justify-right">
        {meta.modes.map((m) => (
             <button
             key="mode.name"
             className="md:w-3/12 text-blueGray-200 bg-transparent shadow px-4 border-none hover:bg-blueGray-500 hover:text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
             type="button"
             onClick={() => setMode(m.name)}>
             <i className={ m.icon + ' fas px-2' }></i> { m.labels.headingShort }
         </button>
        ))}
    </div>
    </>
  )
}
