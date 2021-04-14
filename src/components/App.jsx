import Entry from './Entry'
import emojiPedia from '../emojipedia'


// function  createEmoji(emo) {
//     return <Entry 
//     id={emo.id}
//     key={emo.id}
//     emoji= {emo.emoji}
//     name={emo.name}
//     detail={emo.detail}
//   />
// }
// atwanen am functiona xoman la naw map benusen ashtwanen lera benusen lawe bange bkayn
function App() {
    return (<div>
    <h1> <span>emoji pedia</span></h1> 
     
    <dl className="dictionary">
        
        {/* {emojiPedia.map(emo =>{ //agar {} bgoren bo () awa pewest ba return naka
          return <Entry 
              id={emo.id}
              key={emo.id}
              emoji= {emo.emoji}
              name={emo.name}
              detail={emo.detail}
            />
        })} */}

      {emojiPedia.map(emo =>(//>> () returne nawe
           <Entry 
              id={emo.id}
              key={emo.id}
              emoji= {emo.emoji}
              name={emo.name}
              detail={emo.detail}
            />
      ))} 


        {/* <Entry 
          emoji= {emojiPedia[0].emoji}
          name={emojiPedia[0].name}
          detail={emojiPedia[0].detail}
        />
        <Entry
          emoji= {emojiPedia[1].emoji}
          name={emojiPedia[1].name}
          detail={emojiPedia[1].detail}
          
           />
        <Entry /> */}
    </dl>
    </div>)
}

export default App