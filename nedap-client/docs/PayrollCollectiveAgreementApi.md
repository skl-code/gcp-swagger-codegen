# NedapOnsApi.PayrollCollectiveAgreementApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payrollCollectiveAgreementAPIAll**](PayrollCollectiveAgreementApi.md#payrollCollectiveAgreementAPIAll) | **GET** /v0/administration/collective_agreements | Returns every CollectiveAgreement available
[**payrollCollectiveAgreementAPIById**](PayrollCollectiveAgreementApi.md#payrollCollectiveAgreementAPIById) | **GET** /v0/administration/collective_agreements/{id} | 

<a name="payrollCollectiveAgreementAPIAll"></a>
# **payrollCollectiveAgreementAPIAll**
> PayrollListCollectiveAgreementList payrollCollectiveAgreementAPIAll()

Returns every CollectiveAgreement available

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollCollectiveAgreementApi();
apiInstance.payrollCollectiveAgreementAPIAll((error, data, response) => {
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

[**PayrollListCollectiveAgreementList**](PayrollListCollectiveAgreementList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollCollectiveAgreementAPIById"></a>
# **payrollCollectiveAgreementAPIById**
> PayrollCollectiveAgreement payrollCollectiveAgreementAPIById(id)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollCollectiveAgreementApi();
let id = 789; // Number | used for selecting Collective Agreement

apiInstance.payrollCollectiveAgreementAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting Collective Agreement | 

### Return type

[**PayrollCollectiveAgreement**](PayrollCollectiveAgreement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

