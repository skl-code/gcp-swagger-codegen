# NedapOnsApi.AuthorizationProvisioningDefaultScopeApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorizationProvisioningDefaultScopeAPIUpdate**](AuthorizationProvisioningDefaultScopeApi.md#authorizationProvisioningDefaultScopeAPIUpdate) | **PUT** /v0/authorization/provisioning/users/{user_uuid}/scopes | This endpoint is meant to set the default scope of a user.

<a name="authorizationProvisioningDefaultScopeAPIUpdate"></a>
# **authorizationProvisioningDefaultScopeAPIUpdate**
> AuthorizationProvisioningDefaultScope authorizationProvisioningDefaultScopeAPIUpdate(body, userUuid, opts)

This endpoint is meant to set the default scope of a user.

Provide the complete set of all the groups that should be assigned (e.g. teams, locations, etc) to the user.         As this API is idempotent, the state provided in the last call is the final state. Any groups previously added but not specified in the body will be removed.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AuthorizationProvisioningDefaultScopeApi();
let body = new NedapOnsApi.AuthorizationProvisioningDefaultScope(); // AuthorizationProvisioningDefaultScope | the new DefaultScope
let userUuid = "userUuid_example"; // String | Identifier of User to update.
let opts = { 
  'overrideAll': "overrideAll_example" // String | By default only scopes set by the current integrator are replaced.   For migration purposes this flag allows to replace all scopes when set to 'true', including scopes which are owned by others. 
};
apiInstance.authorizationProvisioningDefaultScopeAPIUpdate(body, userUuid, opts, (error, data, response) => {
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
 **body** | [**AuthorizationProvisioningDefaultScope**](AuthorizationProvisioningDefaultScope.md)| the new DefaultScope | 
 **userUuid** | **String**| Identifier of User to update. | 
 **overrideAll** | **String**| By default only scopes set by the current integrator are replaced.   For migration purposes this flag allows to replace all scopes when set to &#x27;true&#x27;, including scopes which are owned by others.  | [optional] 

### Return type

[**AuthorizationProvisioningDefaultScope**](AuthorizationProvisioningDefaultScope.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

