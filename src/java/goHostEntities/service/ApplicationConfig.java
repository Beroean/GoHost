/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package goHostEntities.service;

import java.util.Set;
import javax.ws.rs.core.Application;

/**
 *
 * @author mahmoud
 */
@javax.ws.rs.ApplicationPath("webresources")
public class ApplicationConfig extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    /**
     * Do not modify addRestResourceClasses() method.
     * It is automatically populated with
     * all resources defined in the project.
     * If required, comment out calling this method in getClasses().
     */
    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(goHostEntities.service.AttendeeFacadeREST.class);
        resources.add(goHostEntities.service.CategoryFacadeREST.class);
        resources.add(goHostEntities.service.EventFacadeREST.class);
        resources.add(goHostEntities.service.FriendFacadeREST.class);
        resources.add(goHostEntities.service.InvitedFacadeREST.class);
        resources.add(goHostEntities.service.LocationFacadeREST.class);
        resources.add(goHostEntities.service.MessageFacadeREST.class);
        resources.add(goHostEntities.service.NotificationFacadeREST.class);
        resources.add(goHostEntities.service.ProfileFacadeREST.class);
        resources.add(goHostEntities.service.UserFacadeREST.class);
    }
    
}
