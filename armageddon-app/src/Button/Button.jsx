export function Button() {
    const test = "test";
    return <button onClick={() => {
        click(test);
        hello();
    }}>some button</button>
}

function click(text){
    console.log("click", text);
}

function hello(){
    console.log("hello");
}