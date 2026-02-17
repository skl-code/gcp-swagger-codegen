# NedapOnsApi.AuthorizationProvisioningUserApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorizationProvisioningUserAPIUpdate**](AuthorizationProvisioningUserApi.md#authorizationProvisioningUserAPIUpdate) | **PUT** /v0/authorization/provisioning/users/{user_uuid} | This endpoint is meant to assign roles with a certain scope (teams/locations) to a user.

<a name="authorizationProvisioningUserAPIUpdate"></a>
# **authorizationProvisioningUserAPIUpdate**
> AuthorizationProvisioningUser authorizationProvisioningUserAPIUpdate(body, userUuid)

This endpoint is meant to assign roles with a certain scope (teams/locations) to a user.

Provide the complete set of all roles that should be assigned (roleUuid, teams and locations) to the user.         As this API is idempotent, the state provided in the last call is the final state. Any roles previously assigned but not specified in the body will be revoked.         The connector is only able to control roles which are assigned by the connector itself (identified by the connector_name and connector_source).         The changes can be seen in the Ons Autorisatie UI if you navigate to the specific user. The added roles are listed in the role overview. All the roles added by a specific connector are marked as such.         More explanation can be found here: https://ons-api.nl/support/Shield.html

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AuthorizationProvisioningUserApi();
let body = new NedapOnsApi.AuthorizationProvisioningUser(); // AuthorizationProvisioningUser | User to update
let userUuid = "userUuid_example"; // String | Identifier of User to update.

apiInstance.authorizationProvisioningUserAPIUpdate(body, userUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AuthorizationProvisioningUser**](AuthorizationProvisioningUser.md)| User to update | 
 **userUuid** | **String**| Identifier of User to update. | 

### Return type

[**AuthorizationProvisioningUser**](AuthorizationProvisioningUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

