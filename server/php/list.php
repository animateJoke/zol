<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/2/23
 * Time: 15:13
 */
header("Content-type:JSON;charset=utf-8");  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");//允许跨域

if($_REQUEST["id"]!="all"){
    if (strlen($_REQUEST["id"])<5){
        $id=$_REQUEST["id"];
        $conn=new mysqli("127.0.0.1","root","","zol_shopping");
        mysqli_query($conn,"set names utf8");
        $sql="select * from list_1 where id='".$id."'";
        $res=$conn->query($sql);
        if ($res->num_rows>0) {
            // 输出数据
            while($row = $res->fetch_assoc()) {
                $rows[]=$row;

            }
            print_r(json_encode($rows));
        } else {
            print_r("[]") ;
        }
        $conn->close();
    }else{
        $id=$_REQUEST["id"];
        $conn=new mysqli("127.0.0.1","root","","zol_shopping");
        mysqli_query($conn,"set names utf8");
        $sql="select * from list_1 where ".$id;
        $res=$conn->query($sql);
        if ($res->num_rows>0) {
            // 输出数据
            while($row = $res->fetch_assoc()) {
//        class1,class2,NAME,info,img,num,color
                /*$str=json_encode('{"id":"'.$row["id"].'","class1":"'.$row["class1"].'","class2":"'.$row["class2"].'","name":"'.$row["name"].'","info":"'.$row["info"].'","img":"'.$row["img"].'","num":"'.$row["num"].'","color":"'.$row["color"].'","price":"'.$row["price"].'"}').$str ;*/
                $rows[]=$row;

            }
            print_r(json_encode($rows));
        } else {
            print_r("[]") ;
        }
        $conn->close();
    }
}else{
    $conn=new mysqli("127.0.0.1","root","","zol_shopping");
    mysqli_query($conn,"set names utf8");
    $sql="select * from list_1";
    $res=$conn->query($sql);
    if ($res->num_rows>0) {
        // 输出数据
        while($row = $res->fetch_assoc()) {
//        class1,class2,NAME,info,img,num,color
            /*$str=json_encode('{"id":"'.$row["id"].'","class1":"'.$row["class1"].'","class2":"'.$row["class2"].'","name":"'.$row["name"].'","info":"'.$row["info"].'","img":"'.$row["img"].'","num":"'.$row["num"].'","color":"'.$row["color"].'","price":"'.$row["price"].'"}').$str ;*/
            $rows[]=$row;

        }
        print_r(json_encode($rows));
    } else {
        print_r("[]") ;
    }
    $conn->close();
}