# NedapOnsApi.AdminLicenseApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminLicenseAPIAll**](AdminLicenseApi.md#adminLicenseAPIAll) | **GET** /v0/administration/admin/licenses | Returns every License available from the LicenseAPI

<a name="adminLicenseAPIAll"></a>
# **adminLicenseAPIAll**
> AdminListLicenseList adminLicenseAPIAll()

Returns every License available from the LicenseAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AdminLicenseApi();
apiInstance.adminLicenseAPIAll((error, data, response) => {
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

[**AdminListLicenseList**](AdminListLicenseList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

