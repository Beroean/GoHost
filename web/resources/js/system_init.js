/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
    coreUrl: "http://" + window.location.host + "/GoHost/api/",
sys_init = {
    createUser: function(email, password) {
        url = coreUrl + "user"
                $.ajax({
          url: url,
          type: 'post',
          data: toSend, 
          contentType: 'application/json',
          dataType: 'json',
          success: Mail.sendOneRecipient
        });
    }
}

