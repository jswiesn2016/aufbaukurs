<?php
/**
 * Created by PhpStorm.
 * User: cmt
 * Date: 28.09.2016
 * Time: 11:00
 */

if ($_REQUEST['username'] == 'admin' && $_REQUEST['password'] == '123') {
    echo 'Login erfolgreich';
} else {
    echo 'Üngultiger login';
}
