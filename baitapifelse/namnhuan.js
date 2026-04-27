function kiemtranamnhuan(n) {

if(n%4==0){
    if(n%100==0){
        if(n%400==0){
            console.log("là Năm nhuận");
    }
        else console.log("không phải năm nhuận");

    }
    else console.log("là năm nhuận");
}
else console.log("không là năm nhuận");
}
kiemtranamnhuan(2000);