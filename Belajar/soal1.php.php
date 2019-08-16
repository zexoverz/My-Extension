<?php 

// Membuat method biodata 
$biodata = [
    "nama" => "Muhammad Faisal",
    "address" => "Jl. H Nawi Malik No.31",
    "hobbies" => array("Basket", "Gaming", "Coding"),
    "is_married" => false,
    "school" => array ("highschool" => "SMK LETRIS INDONESIA 2" ,
                     "University" => "Belum Kuliah"),
    "skills" => array ("Html", "css", "JS")

];

// Me Return Value dengan format JSON
function formatjson($biodata){
    return json_encode($biodata);
} 

echo formatjson($biodata);


?>