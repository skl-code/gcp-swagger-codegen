# NedapOnsApi.AuthorizationProvisioningUserScopeSettingsApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorizationProvisioningUserScopeSettingsAPISet**](AuthorizationProvisioningUserScopeSettingsApi.md#authorizationProvisioningUserScopeSettingsAPISet) | **PUT** /v0/authorization/provisioning/users/{user_uuid}/scope_settings | Updates scope settings of a user.

<a name="authorizationProvisioningUserScopeSettingsAPISet"></a>
# **authorizationProvisioningUserScopeSettingsAPISet**
> AuthorizationProvisioningUserScopeSettings authorizationProvisioningUserScopeSettingsAPISet(body, userUuid)

Updates scope settings of a user.

Updates scope settings of a user. Provide the complete set of legacy_auth_scoping_options that should be assigned to the user.         As this API is idempotent, the state provided in the last call is the final state. Any scopes previously added but not specified in the body will be removed.         This endpoint together with /my_teams and /my_locations are replacements for the PUT /users/{user_uuid}/scopes endpoint.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AuthorizationProvisioningUserScopeSettingsApi();
let body = new NedapOnsApi.AuthorizationProvisioningUserScopeSettings(); // AuthorizationProvisioningUserScopeSettings | the new set of scope settings
let userUuid = "userUuid_example"; // String | Identifier of User to update.

apiInstance.authorizationProvisioningUserScopeSettingsAPISet(body, userUuid, (error, data, response) => {
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
 **body** | [**AuthorizationProvisioningUserScopeSettings**](AuthorizationProvisioningUserScopeSettings.md)| the new set of scope settings | 
 **userUuid** | **String**| Identifier of User to update. | 

### Return type

[**AuthorizationProvisioningUserScopeSettings**](AuthorizationProvisioningUserScopeSettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

