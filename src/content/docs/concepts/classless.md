---
title: "Class-less CSS"
description: "Class-less CSS: A Simplified Approach to Styling"
faq:
  - question: Does class-less styling mean I can never add classes to my HTML?
    answer: No, it means you don't have to. You're always free to add your own
      classes or use CSS Utilities and Components on top of the classless base
      for anything beyond the defaults.
  - question: How is Class-less CSS different from a reset like Normalize.css?
    answer: Normalize/Reset stylesheets mainly remove browser inconsistencies and
      leave you to design elements like forms and buttons from scratch.
      Class-less CSS goes further by giving those elements refined, ready-to-use
      default styles.
  - question: Will Class-less CSS style elements inside a component library (like a
      CMS-rendered widget) that I don't control?
    answer: Yes, since it targets HTML tags directly rather than classes, it applies
      wherever those tags appear, including markup you don't directly author.
      This is usually a benefit, but override the relevant CSS variables if
      third-party markup needs different styling.
---

**Class-less CSS** eliminates the need for manually applying classes to your HTML elements.

Instead, elements are automatically styled based on their HTML tags,
giving you a clean, ready-to-use design without the extra overhead of writing specific class names.

With the [Fylgja Base] package,
you get an out-of-the-box solution for this streamlined approach,
offering a solid and customizable foundation.

## Why Use Class-less CSS?

The core advantage of Class-less CSS is simplicity.

You can build pages faster by relying on automatic, tag-based styling,
which comes with well-designed defaults that already look better than standard browser styles.

And if you want to go beyond the defaults, you can still apply custom CSS without any restrictions.

This combination of ease and flexibility makes Class-less CSS an ideal starting point
for quick prototyping or for projects where a minimalist, clean structure is essential.

## Class-less vs Normalize/Reset CSS

While Normalize and Reset stylesheets focus on creating a consistent baseline across browsers,
Class-less CSS goes a step further by giving you refined styles from the outset.

Instead of having to manually design basic components like forms, buttons, and headings,
these elements are styled with better defaults that require little to no modification.

For instance, form elements such as input fields or buttons are commonly left untouched in normalize or reset styles.

Class-less CSS takes care of them, improving their appearance
and functionality while maintaining full flexibility for further customization.

## Customizing with Fylgja Base

Customization is straightforward with [Fylgja Base].

You can modify built-in CSS variables or add your own styles,
giving you complete control over your design.

What makes Fylgja Base stand out is its low specificity.

This means your custom styles can easily override the defaults
without fighting against overly specific selectors.

This flexibility ensures that Class-less CSS provides a solid foundation for any project,
but it never limits your ability to personalize the look and feel of your site.

[Fylgja Base]: ../packages/base
