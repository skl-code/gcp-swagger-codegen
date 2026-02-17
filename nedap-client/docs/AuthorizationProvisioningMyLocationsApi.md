# NedapOnsApi.AuthorizationProvisioningMyLocationsApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorizationProvisioningMyLocationsAPISet**](AuthorizationProvisioningMyLocationsApi.md#authorizationProvisioningMyLocationsAPISet) | **PUT** /v0/authorization/provisioning/users/{user_uuid}/my_locations | This endpoint is meant to set the list of MyLocations of a user.

<a name="authorizationProvisioningMyLocationsAPISet"></a>
# **authorizationProvisioningMyLocationsAPISet**
> AuthorizationProvisioningMyLocations authorizationProvisioningMyLocationsAPISet(body, userUuid)

This endpoint is meant to set the list of MyLocations of a user.

Provide the complete set of all locations that should be assigned to the user.         As this API is idempotent, the state provided in the last call is the final state. Any locations previously added but not specified in the body will be removed.         This endpoint together with /my_teams and /scope_settings are replacements for the PUT /users/{user_uuid}/scopes endpoint.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AuthorizationProvisioningMyLocationsApi();
let body = new NedapOnsApi.AuthorizationProvisioningMyLocations(); // AuthorizationProvisioningMyLocations | the new list of MyLocations
let userUuid = "userUuid_example"; // String | Identifier of User to update.

apiInstance.authorizationProvisioningMyLocationsAPISet(body, userUuid, (error, data, response) => {
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
 **body** | [**AuthorizationProvisioningMyLocations**](AuthorizationProvisioningMyLocations.md)| the new list of MyLocations | 
 **userUuid** | **String**| Identifier of User to update. | 

### Return type

[**AuthorizationProvisioningMyLocations**](AuthorizationProvisioningMyLocations.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

