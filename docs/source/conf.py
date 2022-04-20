# Configuration file for the Sphinx documentation builder.

# -- Project information

project = 'Robot Framework Guides'
copyright = '2022, Many Kasiriha'
author = 'Many Kasiriha'

# -- General configuration

extensions = [
    'sphinx.ext.duration',
    'sphinx.ext.doctest',
    'sphinx.ext.autodoc',
    'sphinx.ext.autosummary',
    'sphinx.ext.intersphinx',
    'myst_parser',
    ]

intersphinx_mapping = {
    'python': ('https://docs.python.org/3/', None),
    'sphinx': ('https://www.sphinx-doc.org/en/master/', None),
}
intersphinx_disabled_domains = ['std']

templates_path = ['_templates']

# -- Options for HTML output

html_theme = 'sphinx_rtd_theme'
html_logo = "img/robotframeworkguides_logo_small.png"
# -- Options for EPUB output
epub_show_urls = 'footnote'