# NedapOnsApi.FinanceDeclarationRuleApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**financeDeclarationRuleAPIByClient**](FinanceDeclarationRuleApi.md#financeDeclarationRuleAPIByClient) | **GET** /v0/administration/finance/declaration_rules/by_client/{client_id} | Return the Declaration rules belonging to a certain client.
[**financeDeclarationRuleAPIById**](FinanceDeclarationRuleApi.md#financeDeclarationRuleAPIById) | **GET** /v0/administration/finance/declaration_rules/{id} | 
[**financeDeclarationRuleAPICreate**](FinanceDeclarationRuleApi.md#financeDeclarationRuleAPICreate) | **POST** /v0/administration/finance/declaration_rules | Create DeclarationRule
[**financeDeclarationRuleAPIDelete**](FinanceDeclarationRuleApi.md#financeDeclarationRuleAPIDelete) | **DELETE** /v0/administration/finance/declaration_rules/{id} | Deletes the DeclarationRule with given id
[**financeDeclarationRuleAPIIsVerifiedInPeriod**](FinanceDeclarationRuleApi.md#financeDeclarationRuleAPIIsVerifiedInPeriod) | **GET** /v0/administration/finance/declaration_rules/by_client/{client_id}/is_verified | Returns whether the declaration rules for a given client are (partly) verified within the specified period
[**financeDeclarationRuleAPIUpdate**](FinanceDeclarationRuleApi.md#financeDeclarationRuleAPIUpdate) | **PUT** /v0/administration/finance/declaration_rules/{id} | Updates the given DeclarationRule
[**financeDeclarationRuleAPIVerifiedUntil**](FinanceDeclarationRuleApi.md#financeDeclarationRuleAPIVerifiedUntil) | **GET** /v0/administration/finance/declaration_rules/by_client/{client_id}/verified_until | 

<a name="financeDeclarationRuleAPIByClient"></a>
# **financeDeclarationRuleAPIByClient**
> FinanceListDeclarationRuleList financeDeclarationRuleAPIByClient(clientId, opts)

Return the Declaration rules belonging to a certain client.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceDeclarationRuleApi();
let clientId = 789; // Number | the <b>objectId</b> of the client in question
let opts = { 
  'careOrderId': 789 // Number | the <b>objectId</b> of the careorder in question
};
apiInstance.financeDeclarationRuleAPIByClient(clientId, opts, (error, data, response) => {
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
 **clientId** | **Number**| the &lt;b&gt;objectId&lt;/b&gt; of the client in question | 
 **careOrderId** | **Number**| the &lt;b&gt;objectId&lt;/b&gt; of the careorder in question | [optional] 

### Return type

[**FinanceListDeclarationRuleList**](FinanceListDeclarationRuleList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="financeDeclarationRuleAPIById"></a>
# **financeDeclarationRuleAPIById**
> FinanceDeclarationRule financeDeclarationRuleAPIById(id)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceDeclarationRuleApi();
let id = 789; // Number | used for selecting DeclarationRule

apiInstance.financeDeclarationRuleAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting DeclarationRule | 

### Return type

[**FinanceDeclarationRule**](FinanceDeclarationRule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="financeDeclarationRuleAPICreate"></a>
# **financeDeclarationRuleAPICreate**
> FinanceDeclarationRule financeDeclarationRuleAPICreate(body)

Create DeclarationRule

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceDeclarationRuleApi();
let body = new NedapOnsApi.FinanceDeclarationRule(); // FinanceDeclarationRule | DeclarationRule to create

apiInstance.financeDeclarationRuleAPICreate(body, (error, data, response) => {
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
 **body** | [**FinanceDeclarationRule**](FinanceDeclarationRule.md)| DeclarationRule to create | 

### Return type

[**FinanceDeclarationRule**](FinanceDeclarationRule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financeDeclarationRuleAPIDelete"></a>
# **financeDeclarationRuleAPIDelete**
> FinanceDeclarationRule financeDeclarationRuleAPIDelete(id)

Deletes the DeclarationRule with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceDeclarationRuleApi();
let id = 789; // Number | used for selecting DeclarationRule

apiInstance.financeDeclarationRuleAPIDelete(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting DeclarationRule | 

### Return type

[**FinanceDeclarationRule**](FinanceDeclarationRule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="financeDeclarationRuleAPIIsVerifiedInPeriod"></a>
# **financeDeclarationRuleAPIIsVerifiedInPeriod**
> BooleanWithReason financeDeclarationRuleAPIIsVerifiedInPeriod(clientId, from, to)

Returns whether the declaration rules for a given client are (partly) verified within the specified period

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceDeclarationRuleApi();
let clientId = 789; // Number | Long identifying the client
let from = new Date("2013-10-20"); // Date | LocalDate the start date of the period to check (inclusive)
let to = new Date("2013-10-20"); // Date | LocalDate the end date of the period to check (inclusive)

apiInstance.financeDeclarationRuleAPIIsVerifiedInPeriod(clientId, from, to, (error, data, response) => {
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
 **clientId** | **Number**| Long identifying the client | 
 **from** | **Date**| LocalDate the start date of the period to check (inclusive) | 
 **to** | **Date**| LocalDate the end date of the period to check (inclusive) | 

### Return type

[**BooleanWithReason**](BooleanWithReason.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="financeDeclarationRuleAPIUpdate"></a>
# **financeDeclarationRuleAPIUpdate**
> FinanceDeclarationRule financeDeclarationRuleAPIUpdate(body, id)

Updates the given DeclarationRule

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceDeclarationRuleApi();
let body = new NedapOnsApi.FinanceDeclarationRule(); // FinanceDeclarationRule | DeclarationRule to update
let id = 789; // Number | used for selecting DeclarationRule

apiInstance.financeDeclarationRuleAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**FinanceDeclarationRule**](FinanceDeclarationRule.md)| DeclarationRule to update | 
 **id** | **Number**| used for selecting DeclarationRule | 

### Return type

[**FinanceDeclarationRule**](FinanceDeclarationRule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financeDeclarationRuleAPIVerifiedUntil"></a>
# **financeDeclarationRuleAPIVerifiedUntil**
> DateWrapper financeDeclarationRuleAPIVerifiedUntil(clientId)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceDeclarationRuleApi();
let clientId = 789; // Number | Long identifying the client

apiInstance.financeDeclarationRuleAPIVerifiedUntil(clientId, (error, data, response) => {
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
 **clientId** | **Number**| Long identifying the client | 

### Return type

[**DateWrapper**](DateWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

