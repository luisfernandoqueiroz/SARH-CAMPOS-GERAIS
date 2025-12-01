<?php 
  $dbHost = 'tecinfodev.com.br';
  $dbUsername = 'rai27_abast_agua';
  $dbPassaword = 'abastece#agua@';
  $dbName = 'rai27_fornecimento_de_agua';

  $conexao = new mysql($dbHost, $dbUsername, $dbPassaword, $dbName);
  
  //if($conexao->connect_errno);
  //{
  //  echo 'erro';
  //}
  //else
  //{
  //  echo 'conexao efetuada com sucesso';
  //}
?>