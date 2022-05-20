<?php

    include 'db_connection.php'; 

    header("Access-Control-Allow-Origin: * ");
    header("Access-Control-Allow-Headers: * ");

    $request_body = file_get_contents('php://inputs');
    $data = json_decode($request_body);

    $pet_name = $data->pet_name;
    $pet_species = $data->pet_species;
    $pet_sex = $data->pet_sex;
    $pet_age = $data->pet_age;
    $pet_chipID = $data->pet_chipID;
    $owner_name = $data->owner_name;
    $owner_ID = $data->owner_ID;
    $origin = $data->origin;
    $destination = $data->destination;

    $sql = "INSERT INTO Pets(id, petName, petSpecies, petSex, petAge, petChipID, ownerName, ownerID, origin, destination) VALUES (NULL,'$pet_name','$pet_species','$pet_sex','$pet_age','$pet_chipID','$owner_name','$owner_ID','$origin','$destination');";
    $result = mysqli_query($conn, $sql);

    if(!$result){
        echo("Error Description: " . mysqli_error($conn));
    } else{
        echo("A-OKAY!");
    }





?>