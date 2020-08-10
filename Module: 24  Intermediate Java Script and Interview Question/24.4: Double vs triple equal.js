// double equal   দিলে ভ্যারিয়েবল কোন টাইপের তা চেক করে না শুধু ভ্যালুকে চেক করে ।  triple equal  দিলে ভ্যারিয়েবলের টাইপ চেক করে  এবং ভ্যালুকে চেক করে । 
//double equal  ভ্যারিয়েবলগুলোকে একই টাইপে কনভার্ট করার চেষ্টা করে । 

const first = 3;
const second = "3";

if (first == second){
    console.log("condition is true");
}
else{
    console.log("Condition is false");
}

if (first === second){
    console.log("condition is true");
}
else{
    console.log("Condition is false");
}