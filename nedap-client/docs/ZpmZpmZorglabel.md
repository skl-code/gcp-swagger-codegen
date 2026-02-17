# NedapOnsApi.ZpmZpmZorglabel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Object identifier. | [optional] 
**code** | **String** | Zorglabel code. | 
**name** | **String** | Zorglabel name. | 
**valueEditable** | **Boolean** | Indicates if a variable value can be specified with the assigned zorglabel. | [default to false]
**allowedValues** | **String** | Contains a semicolon-separated list of values that may be specified with the assigned zorglabel. | [optional] 
**branchIndication** | **Number** | Indicates if the zorglabel can be used for GGZ, FZ or both.  Possible values: &lt;ul&gt; &lt;li&gt;0 (BOTH)&lt;/li&gt; &lt;li&gt;1 (GGZ)&lt;/li&gt; &lt;li&gt;2 (FZ)&lt;/li&gt; &lt;/ul&gt; | 
**beginDate** | **Date** | Validity begin date. | 
**endDate** | **Date** | Validity end date. | [optional] 
