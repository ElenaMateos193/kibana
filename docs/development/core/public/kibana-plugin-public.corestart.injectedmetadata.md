<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-public](./kibana-plugin-public.md) &gt; [CoreStart](./kibana-plugin-public.corestart.md) &gt; [injectedMetadata](./kibana-plugin-public.corestart.injectedmetadata.md)

## CoreStart.injectedMetadata property

> Warning: This API is now obsolete.
> 
> 

exposed temporarily until https://github.com/elastic/kibana/issues/41990 done use \*only\* to retrieve config values. There is no way to set injected values in the new platform. Use the legacy platform API instead.

<b>Signature:</b>

```typescript
injectedMetadata: {
        getInjectedVar: (name: string, defaultValue?: any) => unknown;
    };
```