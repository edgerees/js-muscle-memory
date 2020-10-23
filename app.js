const exercises = [
    {
        exercise: "dumbell curls",
        bodyType: "biceps",
        bodyPart: "arms"
    },
    {
        exercise: "running",
        bodyType: "quads",
        bodyPart: "legs"
    },
    {
        exercise: "situps",
        bodyType: "abs",
        bodyPart: "core"
    }
];

console.log(exercises);

const container = document.querySelector('.container');
function addExercisesToContainer(array){
    //itterate through the array
    for (let i = 0; i < array.lenght; i++);
    {
        let exercise =array[i].exercise;
        console.log(exercise);
    }
    //set each element to a vairable
    //create a new element
    // access "exercise" key to get value
    //add value text to element (textContent)
    //append new element
}
addExerciseToContainer(exercise);

function addBodyTypeToContainer(array) {

}