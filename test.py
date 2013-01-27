#!/usr/bin/env python

import unittest
from app import app


class TestApp(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()

    def test_home_page_works(self):
        rv = self.app.get('/')
        self.assertTrue(rv.data)
        self.assertEquals(rv.status_code, 200)

    def test_404_page(self):
        rv = self.app.get('/i-am-not-found/')
        self.assertEquals(rv.status_code, 404)

    def robots_txt(self):
        rv = self.app.get('/robots.txt')
        self.assertTrue(rv.data)
        self.assertEquals(rv.status_code, 200)

    def sitemap_xml(self):
        rv = self.app.get('/sitemap.xml')
        self.assertTrue(rv.data)
        self.assertEquals(rv.status_code, 200)


if __name__ == '__main__':
    unittest.main()
