# NedapOnsApi.PayrollCollectiveAgreementRuleApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payrollCollectiveAgreementRuleAPIByCollectiveAgreementId**](PayrollCollectiveAgreementRuleApi.md#payrollCollectiveAgreementRuleAPIByCollectiveAgreementId) | **GET** /v0/administration/collective_agreement_rules/by_collective_agreement_id/{collective_agreement_id} | Return the CollectiveAgreementRules of an employee corresponding to the given id.
[**payrollCollectiveAgreementRuleAPIById**](PayrollCollectiveAgreementRuleApi.md#payrollCollectiveAgreementRuleAPIById) | **GET** /v0/administration/collective_agreement_rules/{id} | 

<a name="payrollCollectiveAgreementRuleAPIByCollectiveAgreementId"></a>
# **payrollCollectiveAgreementRuleAPIByCollectiveAgreementId**
> PayrollListCollectiveAgreementRuleList payrollCollectiveAgreementRuleAPIByCollectiveAgreementId(collectiveAgreementId)

Return the CollectiveAgreementRules of an employee corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollCollectiveAgreementRuleApi();
let collectiveAgreementId = 789; // Number | id

apiInstance.payrollCollectiveAgreementRuleAPIByCollectiveAgreementId(collectiveAgreementId, (error, data, response) => {
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
 **collectiveAgreementId** | **Number**| id | 

### Return type

[**PayrollListCollectiveAgreementRuleList**](PayrollListCollectiveAgreementRuleList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollCollectiveAgreementRuleAPIById"></a>
# **payrollCollectiveAgreementRuleAPIById**
> PayrollCollectiveAgreementRule payrollCollectiveAgreementRuleAPIById(id)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollCollectiveAgreementRuleApi();
let id = 789; // Number | used for selecting ColllectiveAgreementRule

apiInstance.payrollCollectiveAgreementRuleAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting ColllectiveAgreementRule | 

### Return type

[**PayrollCollectiveAgreementRule**](PayrollCollectiveAgreementRule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

