# NedapOnsApi.DashboardProfileApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dashboardProfileAPIAll**](DashboardProfileApi.md#dashboardProfileAPIAll) | **GET** /v0/administration/dashboard_profiles | Return all dashboard profiles

<a name="dashboardProfileAPIAll"></a>
# **dashboardProfileAPIAll**
> ListDashboardProfileList dashboardProfileAPIAll()

Return all dashboard profiles

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DashboardProfileApi();
apiInstance.dashboardProfileAPIAll((error, data, response) => {
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

[**ListDashboardProfileList**](ListDashboardProfileList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

