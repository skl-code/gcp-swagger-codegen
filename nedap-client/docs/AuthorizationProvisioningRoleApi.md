# NedapOnsApi.AuthorizationProvisioningRoleApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorizationProvisioningRoleAPIAll**](AuthorizationProvisioningRoleApi.md#authorizationProvisioningRoleAPIAll) | **GET** /v0/authorization/provisioning/roles | Returns every Role available from the RoleAPI

<a name="authorizationProvisioningRoleAPIAll"></a>
# **authorizationProvisioningRoleAPIAll**
> AuthorizationProvisioningListRoleList authorizationProvisioningRoleAPIAll()

Returns every Role available from the RoleAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AuthorizationProvisioningRoleApi();
apiInstance.authorizationProvisioningRoleAPIAll((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AuthorizationProvisioningListRoleList**](AuthorizationProvisioningListRoleList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

