import Entry from './Entry'
import emojiPedia from '../emojipedia'

function App() {
    return (<div>
    <h1> <span>emoji pedia</span></h1> 
     
    <dl className="dictionary">

      {emojiPedia.map(emo =>(//>> () returne nawe
           <Entry 
              id={emo.id}
              key={emo.id}
              emoji= {emo.emoji}
              name={emo.name}
              detail={emo.detail}
            />
      ))}
    </dl>
    </div>)
}

export default App