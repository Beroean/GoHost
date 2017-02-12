/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Do we even need this?
function  Accessibility (idaccess1){
    this.idaccess = idaccess1;
    this.name = this.getName();
    coreUrl = "http://" + window.location.host + "/GoHost/api/";
    function getName(){
        //get the name of the accessibility from the database
        var url = coreUrl + "accessiblity?idaccessiblity="+idaccess;
        $.getJSON(url).done(nameFollowUp);
    }
    
    function nameFollowUp(data){
        
    }
    
    function getID(){
        return idaccess;
    }
};
