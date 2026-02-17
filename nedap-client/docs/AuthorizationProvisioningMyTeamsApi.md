# NedapOnsApi.AuthorizationProvisioningMyTeamsApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorizationProvisioningMyTeamsAPISet**](AuthorizationProvisioningMyTeamsApi.md#authorizationProvisioningMyTeamsAPISet) | **PUT** /v0/authorization/provisioning/users/{user_uuid}/my_teams | This endpoint is meant to set the list of MyTeams of a user.

<a name="authorizationProvisioningMyTeamsAPISet"></a>
# **authorizationProvisioningMyTeamsAPISet**
> AuthorizationProvisioningMyTeams authorizationProvisioningMyTeamsAPISet(body, userUuid)

This endpoint is meant to set the list of MyTeams of a user.

Provide the complete set of all teams that should be assigned to the user.         As this API is idempotent, the state provided in the last call is the final state. Any teams previously added but not specified in the body will be removed.         This endpoint together with /my_locations and /scope_settings are replacements for the PUT /users/{user_uuid}/scopes endpoint.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AuthorizationProvisioningMyTeamsApi();
let body = new NedapOnsApi.AuthorizationProvisioningMyTeams(); // AuthorizationProvisioningMyTeams | the new list of MyTeams
let userUuid = "userUuid_example"; // String | Identifier of User to update.

apiInstance.authorizationProvisioningMyTeamsAPISet(body, userUuid, (error, data, response) => {
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
 **body** | [**AuthorizationProvisioningMyTeams**](AuthorizationProvisioningMyTeams.md)| the new list of MyTeams | 
 **userUuid** | **String**| Identifier of User to update. | 

### Return type

[**AuthorizationProvisioningMyTeams**](AuthorizationProvisioningMyTeams.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

