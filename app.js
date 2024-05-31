const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 7;
    text_speak.lang= 'en-in'; 
    text_speak.continous = true;
    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning Boss...")
    }
    else if(hour>12 && hour<17){
        speak("Good Afternoon Boss...")
    }
    else{
        speak("Good Evenining Boss...")
    }
}

window.addEventListener('load', ()=>{
    speak("    ");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();

})
function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')|| message.includes('jarvis')){
        speak("Hello Boss");
    }
    else if(message.includes("google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google Boss")
    }
    else if(message.includes("open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube Boss")
    }
    else if(message.includes("open facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook Boss")
    }
    else if(message.includes("open instagram")){
        window.open("https://www.instagram.com/", "_blank");
        speak("Opening instagram Boss")
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are') || message.includes('how to')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message + "Boss";
	    speak(finalText);
  
    }
    else if(message.includes("open wikipedia")){
        window.open("https://wikipedia.com", "_blank");
        speak("Opening Boss")
    }

    else if(message.includes('accordig to wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if(message.includes('time right now')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('todays date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }
    else if(message.includes('whatsapp')) {
        window.open('whatsapp:///')
        const finalText = "opening Boss";
        speak(finalText);
    }
    else if(message.includes('spotify')) {
        window.open('Spotify:///')
        const finalText = "opening Boss";
        speak(finalText);
    }
    else if(message.includes('gmail')) {
        window.open('https://mail.google.com/mail/')
        const finalText = "opening Boss";
        speak(finalText);
    }
    else if(message.includes('close') || message.includes('exit') || message.includes('shutdown')) {
        window.close();
        const finalText = "closing Boss";
        speak(finalText);
    
    }
    else if(message.includes('play')) {
        window.close();
        const finalText = "closing Boss";
        speak(finalText);
    }
    else if(message.includes('stop') || message.includes('resume') || message.includes('pause')){
        window.close();
        const finalText = "stoping Boss";
        speak(finalText);
    }
    else if(message.includes('open neon')) {
        window.open("C:\Users\Harshit Tiwari\Downloads\eclipse-jee-neon-3-win32-x86_64\eclipse\eclipse.exe", "_blank");
        const finalText = "opening Boss";
        speak(finalText);
    }
    else if(message.includes('open eclipse')) {
        window.open("", "_blank");
        const finalText = "opening Boss";
        speak(finalText);
    }
}