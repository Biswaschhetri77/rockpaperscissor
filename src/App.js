import logo from './logo.svg';
import './App.css';
import styles from './App.module.css'
import { useEffect, useState } from 'react';
import { FaRegHandPaper, FaRegHandScissors, FaRegHandRock} from 'react-icons/fa'
function App() {

const options = [
          {name: 'rock', icon: <FaRegHandRock size={60}/>},
          {name: 'paper', icon: <FaRegHandPaper size={60}/>},
          {name: 'scissor', icon: <FaRegHandScissors size={60}/>}
]

const [playerHand, setPlayerHand] =useState(0);
const [computerHand, setComputerHand] = useState(0);
const [timer, setTimer] = useState(3);
const [runTimer, setRunTimer] = useState(false);
const [results, setResults] = useState({
  winner:'',
  Message:'',
});
const[score, setScore] = useState({
  player:0,
  computer:0,
})



useEffect(()=>{
  if(runTimer && timer > 0){
    setTimeout(() => {
      setTimer(timer - 1)
    }, 1000)
  }else if(runTimer && timer < 1){
    setRunTimer(false)
    setTimer(3)
    play()
  }
},[runTimer, timer])


const selectOption = (handIndex) => {
  setResults({winner:'', Message:''})
  setPlayerHand(handIndex);
};

const generateComputerHand = () => {
  const randomNumber = Math.floor(Math.random() * 3)
  setComputerHand(randomNumber);
};

console.log(computerHand);
const start = () => {
  setResults({winner:'', Message:''})
  setRunTimer(true)
  generateComputerHand()
}

console.log(playerHand);


  const play = () =>{
    if (options[playerHand].name === 'rock' &&  options[computerHand].name === 'rock'){
      setResults({winner:'No one', Message:'We have a draw'})
    }else if (options[playerHand].name === 'paper' &&  options[computerHand].name === 'paper'){
      setResults({winner:'No one', Message:'We have a draw'})
    }else if (options[playerHand].name === 'scissor' &&  options[computerHand].name === 'scissor'){
      setResults({winner:'No one', Message:'We have a draw'})
    }else if (options[playerHand].name === 'rock' &&  options[computerHand].name === 'paper'){
      setResults({winner:'Computer', Message:'Paper beats rock'})
      setScore({...score, computer:score.computer + 1})
    }else if (options[playerHand].name === 'rock' &&  options[computerHand].name === 'scissor'){
      setResults({winner:'Player', Message:'Scissor beats rock'})
      setScore({...score, player:score.player + 1})
    } else if (options[playerHand].name === 'paper' &&  options[computerHand].name === 'rock'){
      setResults({winner:'Player', Message:'Paper beats rock'})
      setScore({...score, player:score.player + 1})

    }else if (options[playerHand].name === 'paper' &&  options[computerHand].name === 'scissor'){
      setResults({winner:'computer', Message:'Scissor beats paper'})
      setScore({...score, computer:score.computer + 1})
    }else if (options[playerHand].name === 'scissor' &&  options[computerHand].name === 'rock'){
      setResults({winner:'computer', Message:'Rock beats scissor'})
      setScore({...score, computer:score.computer + 1})
    }else if (options[playerHand].name === 'scissor' &&  options[computerHand].name === 'paper'){
      setResults({winner:'Player', Message:'Scissor beats paper'})
      setScore({...score, player:score.player + 1})

    }
  }
   
  



return(
  <div className={styles.container}>
    <div className={styles.titlectn}>
      <h1>ROCK, PAPER, SCISSORS</h1>
      <p>React game!</p>
    </div>

    <div className={styles.scoreCtn}>
      <div className={styles.score}>
        <h3>Player</h3>
        <p>Score:{score.player}</p>
      </div>
      <div className={styles.score}>
        <h3>Computer</h3>
        <p>Score:{score.computer}</p>
      </div>
    </div>
    <div className={styles.result}>
        <div className={styles.palyerHand}>
        {runTimer && <p className={styles.playerShake}>{options[0].icon}</p>}
        {results?.winner &&(
          <>
           {options[playerHand].icon}
           <p> {options[playerHand].name}</p>
          </>
        )}
          
        </div>
        <div className={styles.midColumn}>

          {runTimer && <p className={styles.timer}>{timer}</p>}
           {results?.winner && (
           <>
           <p className={styles.resultsWinner}>Winner:{results.winner}</p>
          <p className={styles.resultsMessage}>{results.Message}</p> 
          </>
           )}

        </div>

        <div className={styles.computerHand}>

          {runTimer && <p className={styles.computerShake}>{options[0].icon}</p>}
          {results?.winner && (
            <>
            {options[computerHand].icon}
          <p>{options[computerHand].name}</p> 
          </>
          )}
    
        </div>
      </div>
      <div className={styles.choiceBtnCtn}>
        <button className={`${styles.choiceBtn} ${styles.bounce} ${playerHand === 0 ? styles.activeChoice : ''}`} onClick={() => selectOption(0)}>
        <FaRegHandRock size={60}/>
        Rock
        </button>
        <button className={`${styles.choiceBtn} ${styles.bounce} ${playerHand === 1 ? styles.activeChoice : ''}`} onClick={() => selectOption(1)}>
        <FaRegHandPaper size={60}/>
        Paper
        </button>
        <button className={`${styles.choiceBtn} ${styles.bounce} ${playerHand === 2 ? styles.activeChoice : ''}`} onClick={() => selectOption(2)}>
        <FaRegHandScissors size={60}/>
        Scissors
        </button>
      </div>
      <button className={styles.playBtn} onClick={start}>Play</button>
  </div>
)
 
}

export default App;
