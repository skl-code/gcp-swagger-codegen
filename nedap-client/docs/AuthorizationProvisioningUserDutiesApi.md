# NedapOnsApi.AuthorizationProvisioningUserDutiesApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorizationProvisioningUserDutiesAPIUpdate**](AuthorizationProvisioningUserDutiesApi.md#authorizationProvisioningUserDutiesAPIUpdate) | **PUT** /v0/authorization/provisioning/users/{user_uuid}/duties | This endpoint is meant to assign roles with a certain scope to a user.

<a name="authorizationProvisioningUserDutiesAPIUpdate"></a>
# **authorizationProvisioningUserDutiesAPIUpdate**
> AuthorizationProvisioningUserDuties authorizationProvisioningUserDutiesAPIUpdate(body, userUuid)

This endpoint is meant to assign roles with a certain scope to a user.

Provide the complete set of all roles that should be assigned to the user. Roles should be provided together with flags to reflect the scoping policy that states what clients and/or employees should be accessible.         As this API is idempotent, the state provided in the last call is the final state. Any roles previously assigned but not specified in the body will be revoked.         The connector is only able to control roles which are assigned by the connector itself (identified by the connector_name and connector_source).         The changes can be seen in the Ons Autorisatie UI if you navigate to the specific user. The added roles are listed in the role overview. All the roles added by a specific connector are marked as such.         More explanation can be found here: https://ons-api.nl/support/Shield.html.         This endpoint replaces PUT /users endpoint.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AuthorizationProvisioningUserDutiesApi();
let body = new NedapOnsApi.AuthorizationProvisioningUserDuties(); // AuthorizationProvisioningUserDuties | User to update
let userUuid = "userUuid_example"; // String | Identifier of User to update.

apiInstance.authorizationProvisioningUserDutiesAPIUpdate(body, userUuid, (error, data, response) => {
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
 **body** | [**AuthorizationProvisioningUserDuties**](AuthorizationProvisioningUserDuties.md)| User to update | 
 **userUuid** | **String**| Identifier of User to update. | 

### Return type

[**AuthorizationProvisioningUserDuties**](AuthorizationProvisioningUserDuties.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

