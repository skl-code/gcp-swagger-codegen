# NedapOnsApi.PayrollAccountTypeApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payrollAccountTypeAPIAll**](PayrollAccountTypeApi.md#payrollAccountTypeAPIAll) | **GET** /v0/administration/account_types | Returns every AccountType available from the AccountTypeAPI
[**payrollAccountTypeAPIById**](PayrollAccountTypeApi.md#payrollAccountTypeAPIById) | **GET** /v0/administration/account_types/{id} | Return the AccountType corresponding to the given id

<a name="payrollAccountTypeAPIAll"></a>
# **payrollAccountTypeAPIAll**
> PayrollListAccountTypeList payrollAccountTypeAPIAll(opts)

Returns every AccountType available from the AccountTypeAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollAccountTypeApi();
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.payrollAccountTypeAPIAll(opts, (error, data, response) => {
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
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**PayrollListAccountTypeList**](PayrollListAccountTypeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollAccountTypeAPIById"></a>
# **payrollAccountTypeAPIById**
> PayrollAccountType payrollAccountTypeAPIById(id, opts)

Return the AccountType corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollAccountTypeApi();
let id = 789; // Number | used for selecting AccountType
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.payrollAccountTypeAPIById(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting AccountType | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**PayrollAccountType**](PayrollAccountType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

