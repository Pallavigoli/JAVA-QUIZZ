import './App.css';
function App() {
  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
      </div>
      );
    }
    function Header()
    {
      return(
        <div className='title'>
    <p id="head">Java Quizz Time </p>
</div>
  );
}

function Content()
{
  function display(event) {
    let ans1= event.target.q1.value;
    let ans2= event.target.q2.value;
    let ans3= event.target.q3.value;
    let ans4=event.target.q4.value;
    let ans5=event.target.q5.value;
    let ans6=event.target.q6.value;
    let ans7=event.target.q7.value;
    let ans8=event.target.q8.value;
    let ans9=event.target.q9.value;
    let ans10=event.target.q10.value;
    let marks=0;
    if(ans1  === 'James Gosling')
    {
      marks++;
    }
    if(ans2  === "Java is a platform-independent programming language")
    {
      marks++;
    }
    if(ans3 === "Use of pointers")
    {
      marks++;
    }
    if(ans4 === "Java is a platform-dependent programming language")
    {
      marks++;
    }
    if(ans5 === "Keyword")
    {
      marks++;
    }
    if(ans6 === ".java")
    {
      marks++;
    }
    if(ans7 === "JavaPATH")
    {
      marks++;
    }
    if(ans8 === "Compilation")
    {
      marks++;
    }
    if(ans9 === "A thread can be formed by implementing Runnable interface only")
    {
      marks++;
    }
    if(ans10 === "Passing itself to the method of the same class")
    {
      marks++;
    }
    alert("Total marks: "+marks)
  }
  return(
    <div>
      <form onSubmit={display}>
      <Question
      quest="1.Who invented Java Programming?"
      ans1="Gudio van roosam "
      ans2="James Gosling"
      ans3="Dennis Ritchie"
      ans4="James Ritchie"
      name="q1"
      />
      
      <Question
      quest="2.Which statement is true about Java?"
      ans1="Java is a sequence-dependent programming language"
      ans2="Java is a code dependent programming language"
      ans3="Java is a platform-dependent programming language"
      ans4="Java is a platform-independent programming language"
      name="q2"
      />
      
      <Question
        quest="3.Which one of the following is not a Java feature?"
        ans1="Object-oriented"
        ans2="Use of pointers"
        ans3="portable"
        ans4="Dynamic and Extensible"
        name="q3"
      />
      
      <Question
      quest="4.Which statement is not true about Java?"
      ans1="Java is a robust programming language"
      ans2="Java is a simple programming language"
      ans3="Java is a platform-dependent programming language"
      ans4="Java is a secure programming language"
      name="q4"
      />
      
      <Question
      quest="5.Which of these cannot be used for a variable name in Java?"
      ans1="Keyword"
      ans2="identifier"
      ans3="both a and b"
      ans4="none of the mentioned"
      name="q5"
      />
      
      <Question
      quest="6.What is the extension of java code files?"
      ans1=".js"
      ans2=".txt"
      ans3=".class"
      ans4=".java"
      name="q6"
      />
      
      <Question
      quest="7.Which environment variable is used to set the java path?"
      ans1="MAVEN_Path"
      ans2="JavaPATH"
      ans3="JAVA"
      ans4="JAVA_HOME"
      name="q7"
      />
      
      <Question
      quest="8.Which of the following is not an OOPS concept in Java?"
      ans1="Polymorphism"
      ans2="Compilation"
      ans3="Inheritance"
      ans4="Encapsulation"
      name="q8"
      />
      
      <Question
      quest="9.Which of these statements is incorrect about Thread?"
      ans1="start() method is used to begin execution of the thread"
      ans2="run() method is used to begin execution of a thread before start() method in special cases"
      ans3="A thread can be formed by implementing Runnable interface only"
      ans4="A thread can be formed by a class that extends Thread class"
      name="q9"
      />
      
      <Question
      quest="10.What is not the use of “this” keyword in Java?"
      ans1="Referring to the instance variable when a local variable has the same name"
      ans2="Passing itself to the method of the same class"
      ans3="Passing itself to another method"
      ans4="Calling another constructor in constructor chaining"
      name="q10"
      />
     <div className='sub'>
      <input type="submit"></input>
     </div>
    </form>
    </div>
  );
}

function Question(props)
{
  return(
  <div className='ques'>
    <h2>{props.quest}</h2>
    <input type='radio' name={props.name} value={props.ans1}></input>
    <label>{props.ans1}</label>
    <p></p>
    <input type='radio' name={props.name} value={props.ans2}></input>
    <label>{props.ans2}</label>
    <p></p>
    <input type='radio' name={props.name} value={props.ans3}></input>
    <label>{props.ans3}</label>
    <p></p>
    <input type='radio' name={props.name} value={props.ans4}></input>
    <label>{props.ans4}</label>
  </div>);
}


function Footer()
{
  return(
<div className='foot'>
  Developed by Goli Pallavi &nbsp;
  <a style={{display:'inline'}} href="https://github.com/Pallavigoli/JAVA-QUIZZ">View on GitHub</a>.
  <p>&copy; 2024 JavaQuiz. All rights reserved.</p>
</div>
  );
}

export default App;
