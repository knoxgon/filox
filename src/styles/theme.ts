import { createTheme } from '@mui/material/styles';

export const GlobalTheme = createTheme({
    "breakpoints": {
        "keys": [
            "xs",
            "sm",
            "md",
            "lg",
            "xl"
        ],
        "values": {
            "xs": 0,
            "sm": 600,
            "md": 900,
            "lg": 1200,
            "xl": 1536
        },
        "unit": "px"
    },
    "direction": "ltr",
    "components": {
        "MuiCssBaseline": {
            "defaultProps": {
                "enableColorScheme": true
            },
            "styleOverrides": {
                "html": {
                    "overflowY": "scroll"
                }
            }
        },
        "MuiAlert": {
            "styleOverrides": {
                "root": {
                    "padding": "12px 16px"
                },
                "icon": {
                    "paddingTop": 12,
                    "paddingBottom": 0
                }
            }
        },
        "MuiButtonBase": {
            "defaultProps": {
                "disableTouchRipple": true,
                "disableRipple": true
            },
            "styleOverrides": {}
        },
        "MuiMenu": {
            "styleOverrides": {}
        },
        "MuiPopover": {
            "styleOverrides": {}
        },
        "MuiDivider": {
            "styleOverrides": {}
        },
        "MuiChip": {
            "styleOverrides": {}
        },
        "MuiList": {
            "styleOverrides": {
                "root": {
                    "padding": 0
                }
            }
        },
        "MuiListItemButton": {
            "styleOverrides": {}
        },
        "MuiSelect": {
            "styleOverrides": {
                "iconFilled": {
                    "top": "calc(50% - .25em)"
                }
            }
        },
        "MuiTab": {
            "defaultProps": {
                "disableTouchRipple": true
            }
        },
        "MuiPaper": {
            "styleOverrides": {}
        },
        "MuiTableCell": {
            "styleOverrides": {}
        },
        "MuiToggleButtonGroup": {
            "styleOverrides": {}
        },
        "MuiToggleButton": {
            "styleOverrides": {}
        },
        "MuiTooltip": {
            "styleOverrides": {
                "tooltip": {
                    "borderRadius": 6,
                    "padding": "6px 12px"
                }
            }
        },
        "MuiSwitch": {
            "styleOverrides": {
                "root": {
                    "width": 32,
                    "height": 20,
                    "padding": 0,
                    "& .MuiSwitch-switchBase": {
                        "&.Mui-checked": {
                            "transform": "translateX(11px)",
                            "color": "#fff"
                        }
                    }
                },
                "switchBase": {
                    "height": 20,
                    "width": 20,
                    "padding": 0,
                    "color": "#fff",
                    "&.Mui-checked + .MuiSwitch-track": {
                        "opacity": 1
                    }
                },
                "thumb": {
                    "flexShrink": 0,
                    "width": "14px",
                    "height": "14px"
                }
            }
        },
        "MuiPaginationItem": {
            "styleOverrides": {}
        }
    },
    "palette": {
        "mode": "light",
        "primary": {
            "50": "hsl(210, 100%, 96%)",
            "100": "hsl(210, 100%, 90%)",
            "200": "hsl(210, 100%, 80%)",
            "300": "hsl(210, 100%, 70%)",
            "400": "hsl(210, 100%, 60%)",
            "500": "hsl(210, 100%, 45%)",
            "600": "hsl(210, 100%, 42%)",
            "700": "hsl(210, 100%, 38%)",
            "800": "hsl(210, 100%, 30%)",
            "900": "hsl(210, 100%, 23%)",
            "main": "hsl(210, 100%, 45%)",
            "light": "hsl(210, 100%, 70%)",
            "dark": "hsl(210, 100%, 38%)",
            "contrastText": "#fff"
        },
        "secondary": {
            "50": "hsl(215, 15%, 97%)",
            "100": "hsl(215, 15%, 92%)",
            "200": "hsl(215, 15%, 89%)",
            "300": "hsl(215, 15%, 82%)",
            "400": "hsl(215, 15%, 75%)",
            "500": "hsl(215, 15%, 65%)",
            "600": "hsl(215, 15%, 50%)",
            "700": "hsl(215, 15%, 40%)",
            "800": "hsl(215, 15%, 22%)",
            "900": "hsl(215, 15%, 12%)",
            "main": "hsl(210, 14%, 87%)",
            "contrastText": "hsl(210, 14%, 22%)",
            "light": "hsl(210, 14%, 89.6%)",
            "dark": "hsl(210, 14%, 60.9%)"
        },
        "divider": "hsl(215, 15%, 92%)",
        "common": {
            "black": "hsl(200, 10%, 4%)",
            "white": "#fff"
        },
        "text": {
            "primary": "hsl(215, 15%, 12%)",
            "secondary": "hsl(215, 15%, 22%)",
            "disabled": "rgba(0, 0, 0, 0.38)"
        },
        "grey": {
            "50": "hsl(215, 15%, 97%)",
            "100": "hsl(215, 15%, 92%)",
            "200": "hsl(215, 15%, 89%)",
            "300": "hsl(215, 15%, 82%)",
            "400": "hsl(215, 15%, 75%)",
            "500": "hsl(215, 15%, 65%)",
            "600": "hsl(215, 15%, 50%)",
            "700": "hsl(215, 15%, 40%)",
            "800": "hsl(215, 15%, 22%)",
            "900": "hsl(215, 15%, 12%)",
            "A100": "#f5f5f5",
            "A200": "#eeeeee",
            "A400": "#bdbdbd",
            "A700": "#616161"
        },
        "error": {
            "50": "hsl(355, 98%, 97%)",
            "100": "hsl(355, 98%, 93%)",
            "200": "hsl(355, 98%, 87%)",
            "300": "hsl(355, 98%, 80%)",
            "400": "hsl(355, 98%, 74%)",
            "500": "hsl(355, 98%, 66%)",
            "600": "hsl(355, 98%, 46%)",
            "700": "hsl(355, 98%, 39%)",
            "800": "hsl(355, 98%, 29%)",
            "900": "hsl(355, 98%, 17%)",
            "main": "hsl(355, 98%, 66%)",
            "light": "hsl(355, 98%, 80%)",
            "dark": "hsl(355, 98%, 39%)",
            "contrastText": "#fff"
        },
        "success": {
            "50": "hsl(144, 72%, 95%)",
            "100": "hsl(144, 72%, 87%)",
            "200": "hsl(144, 72%, 77%)",
            "300": "hsl(144, 72%, 66%)",
            "400": "hsl(144, 72%, 56%)",
            "500": "hsl(144, 72%, 46%)",
            "600": "hsl(144, 72%, 41%)",
            "700": "hsl(144, 72%, 37%)",
            "800": "hsl(144, 72%, 32%)",
            "900": "hsl(144, 72%, 21%)",
            "main": "hsl(144, 72%, 37%)",
            "light": "hsl(144, 72%, 66%)",
            "dark": "hsl(144, 72%, 37%)",
            "contrastText": "#fff"
        },
        "warning": {
            "50": "hsl(48, 100%, 96%)",
            "100": "hsl(48, 100%, 88%)",
            "200": "hsl(48, 100%, 82%)",
            "300": "hsl(48, 100%, 64%)",
            "400": "hsl(48, 100%, 48%)",
            "500": "hsl(48, 100%, 44%)",
            "600": "hsl(40, 100%, 40%)",
            "700": "hsl(36, 100%, 34%)",
            "800": "hsl(36, 100%, 27%)",
            "900": "hsl(36, 100%, 18%)",
            "main": "hsl(48, 100%, 44%)",
            "light": "hsl(48, 100%, 64%)",
            "dark": "hsl(36, 100%, 34%)",
            "contrastText": "rgba(0, 0, 0, 0.87)"
        },
        "info": {
            "main": "#0288d1",
            "light": "#03a9f4",
            "dark": "#01579b",
            "contrastText": "#fff"
        },
        "contrastThreshold": 3,
        "tonalOffset": 0.2,
        "background": {
            "paper": "#fff",
            "default": "#fff"
        },
        "action": {
            "active": "rgba(0, 0, 0, 0.54)",
            "hover": "rgba(0, 0, 0, 0.04)",
            "hoverOpacity": 0.04,
            "selected": "rgba(0, 0, 0, 0.08)",
            "selectedOpacity": 0.08,
            "disabled": "rgba(0, 0, 0, 0.26)",
            "disabledBackground": "rgba(0, 0, 0, 0.12)",
            "disabledOpacity": 0.38,
            "focus": "rgba(0, 0, 0, 0.12)",
            "focusOpacity": 0.12,
            "activatedOpacity": 0.12
        }
    },
    "shape": {
        "borderRadius": 12
    },
    "typography": {
        "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
        "h1": {
            "fontFamily": "\"General Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontSize": "clamp(2.5rem, 1.125rem + 3.5vw, 3.5em)",
            "fontWeight": 600,
            "lineHeight": 1.1142857142857143,
            "letterSpacing": -0.2,
            "color": "hsl(210, 14%, 7%)",
            "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
        },
        "h2": {
            "fontFamily": "\"General Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontSize": "clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)",
            "fontWeight": 600,
            "lineHeight": 1.2222222222222223,
            "letterSpacing": -0.2,
            "color": "hsl(210, 14%, 13%)",
            "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
        },
        "h3": {
            "fontFamily": "\"General Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontSize": "2.25rem",
            "lineHeight": 1.2222222222222223,
            "letterSpacing": 0.2,
            "fontWeight": 400,
            "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
        },
        "h4": {
            "fontFamily": "\"General Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontSize": "1.875rem",
            "lineHeight": 1.5,
            "letterSpacing": 0.2,
            "fontWeight": 400,
            "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
        },
        "h5": {
            "fontSize": "1.5rem",
            "lineHeight": 1.5,
            "letterSpacing": 0.1,
            "color": "hsl(210, 100%, 45%)",
            "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontWeight": 400,
            "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
        },
        "h6": {
            "fontSize": "1.25rem",
            "lineHeight": 1.5,
            "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontWeight": 500,
            "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
        },
        "button": {
            "textTransform": "initial",
            "fontWeight": 700,
            "letterSpacing": 0,
            "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontSize": "0.875rem",
            "lineHeight": 1.75,
            "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
        },
        "subtitle1": {
            "fontSize": "1.125rem",
            "lineHeight": 1.3333333333333333,
            "letterSpacing": 0,
            "fontWeight": 500,
            "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
        },
        "body1": {
            "fontSize": "1rem",
            "lineHeight": 1.5,
            "letterSpacing": 0,
            "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontWeight": 400,
            "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
        },
        "body2": {
            "fontSize": "0.875rem",
            "lineHeight": 1.5,
            "letterSpacing": 0,
            "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontWeight": 400,
            "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
        },
        "caption": {
            "display": "inline-block",
            "fontSize": "0.75rem",
            "lineHeight": 1.5,
            "letterSpacing": 0,
            "fontWeight": 700,
            "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
        },
        "allVariants": {
            "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
        },
        "htmlFontSize": 16,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        "fontWeightBold": 700,
        "subtitle2": {
            "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontWeight": 500,
            "fontSize": "0.875rem",
            "lineHeight": 1.57,
            "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
        },
        "overline": {
            "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontWeight": 400,
            "fontSize": "0.75rem",
            "lineHeight": 2.66,
            "textTransform": "uppercase",
            "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
        },
    },
    "unstable_sxConfig": {
        "border": {
            "themeKey": "borders"
        },
        "borderTop": {
            "themeKey": "borders"
        },
        "borderRight": {
            "themeKey": "borders"
        },
        "borderBottom": {
            "themeKey": "borders"
        },
        "borderLeft": {
            "themeKey": "borders"
        },
        "borderColor": {
            "themeKey": "palette"
        },
        "borderTopColor": {
            "themeKey": "palette"
        },
        "borderRightColor": {
            "themeKey": "palette"
        },
        "borderBottomColor": {
            "themeKey": "palette"
        },
        "borderLeftColor": {
            "themeKey": "palette"
        },
        "outline": {
            "themeKey": "borders"
        },
        "outlineColor": {
            "themeKey": "palette"
        },
        "borderRadius": {
            "themeKey": "shape.borderRadius"
        },
        "color": {
            "themeKey": "palette"
        },
        "bgcolor": {
            "themeKey": "palette",
            "cssProperty": "backgroundColor"
        },
        "backgroundColor": {
            "themeKey": "palette"
        },
        "p": {},
        "pt": {},
        "pr": {},
        "pb": {},
        "pl": {},
        "px": {},
        "py": {},
        "padding": {},
        "paddingTop": {},
        "paddingRight": {},
        "paddingBottom": {},
        "paddingLeft": {},
        "paddingX": {},
        "paddingY": {},
        "paddingInline": {},
        "paddingInlineStart": {},
        "paddingInlineEnd": {},
        "paddingBlock": {},
        "paddingBlockStart": {},
        "paddingBlockEnd": {},
        "m": {},
        "mt": {},
        "mr": {},
        "mb": {},
        "ml": {},
        "mx": {},
        "my": {},
        "margin": {},
        "marginTop": {},
        "marginRight": {},
        "marginBottom": {},
        "marginLeft": {},
        "marginX": {},
        "marginY": {},
        "marginInline": {},
        "marginInlineStart": {},
        "marginInlineEnd": {},
        "marginBlock": {},
        "marginBlockStart": {},
        "marginBlockEnd": {},
        "displayPrint": {
            "cssProperty": false
        },
        "display": {},
        "overflow": {},
        "textOverflow": {},
        "visibility": {},
        "whiteSpace": {},
        "flexBasis": {},
        "flexDirection": {},
        "flexWrap": {},
        "justifyContent": {},
        "alignItems": {},
        "alignContent": {},
        "order": {},
        "flex": {},
        "flexGrow": {},
        "flexShrink": {},
        "alignSelf": {},
        "justifyItems": {},
        "justifySelf": {},
        "gap": {},
        "rowGap": {},
        "columnGap": {},
        "gridColumn": {},
        "gridRow": {},
        "gridAutoFlow": {},
        "gridAutoColumns": {},
        "gridAutoRows": {},
        "gridTemplateColumns": {},
        "gridTemplateRows": {},
        "gridTemplateAreas": {},
        "gridArea": {},
        "position": {},
        "zIndex": {
            "themeKey": "zIndex"
        },
        "top": {},
        "right": {},
        "bottom": {},
        "left": {},
        "boxShadow": {
            "themeKey": "shadows"
        },
        "width": {},
        "maxWidth": {},
        "minWidth": {},
        "height": {},
        "maxHeight": {},
        "minHeight": {},
        "boxSizing": {},
        "fontFamily": {
            "themeKey": "typography"
        },
        "fontSize": {
            "themeKey": "typography"
        },
        "fontStyle": {
            "themeKey": "typography"
        },
        "fontWeight": {
            "themeKey": "typography"
        },
        "letterSpacing": {},
        "textTransform": {},
        "lineHeight": {},
        "textAlign": {},
        "typography": {
            "cssProperty": false,
            "themeKey": "typography"
        }
    },
    "mixins": {
        "toolbar": {
            "minHeight": 56,
            "@media (min-width:0px)": {
                "@media (orientation: landscape)": {
                    "minHeight": 48
                }
            },
            "@media (min-width:600px)": {
                "minHeight": 64
            }
        }
    },
    "shadows": [
        "none",
        "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
        "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
        "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
        "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
        "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
        "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
        "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
        "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
        "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
        "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
        "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
        "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
        "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
        "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
        "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
        "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
        "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
        "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
        "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
        "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
        "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
        "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
        "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
        "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
    ],
    "transitions": {
        "easing": {
            "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
            "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
            "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
            "sharp": "cubic-bezier(0.4, 0, 0.6, 1)"
        },
        "duration": {
            "shortest": 150,
            "shorter": 200,
            "short": 250,
            "standard": 300,
            "complex": 375,
            "enteringScreen": 225,
            "leavingScreen": 195
        }
    },
    "zIndex": {
        "mobileStepper": 1000,
        "fab": 1050,
        "speedDial": 1050,
        "appBar": 1100,
        "drawer": 1200,
        "modal": 1300,
        "snackbar": 1400,
        "tooltip": 1500
    }
})