---
title: "Styleguide"
date: 2018-11-02T13:43:09Z
draft: true
---

# Heading one

## Heading two

### Heading three

#### Heading four

##### Heading five

###### Heading six

I am a paragraph, this is what i look like. I can have _italic_ content, __bold__ content, I can even have sections of `code` in me


## Code blocks

{{< highlight go "linenos=table" >}}
func GetTitleFunc(style string) func(s string) string {
  switch strings.ToLower(style) {
  case "go":
    return strings.Title
  case "chicago":
    tc := transform.NewTitleConverter(transform.ChicagoStyle)
    return tc.Title
  default:
    tc := transform.NewTitleConverter(transform.APStyle)
    return tc.Title
  }
}
{{< / highlight >}}