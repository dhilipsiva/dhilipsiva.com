from flask import Flask, render_template, redirect

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html', page='home')


@app.route('/i_am')
def i_am():
    return render_template('i_am.html', page='i_am')


@app.route('/projects')
def projects():
    return render_template('projects.html', page='projects')


@app.route('/technologies')
def technologies():
    return render_template('technologies.html', page='technologies')


@app.route('/get_in_touch')
def get_in_touch():
    return render_template('get_in_touch.html', page='get_in_touch')


@app.route('/<file_name>.txt')
def send_text_file(file_name):
    file_dot_text = file_name + '.txt'
    return app.send_static_file(file_dot_text)


@app.route('/<file_name>.xml')
def send_xml_file(file_name):
    file_dot_text = file_name + '.xml'
    return app.send_static_file(file_dot_text)


@app.route('/DSBarChart/')
def DSBarChart():
    return redirect('http://dhilipsiva.github.com/DSBarChart/')


@app.route('/blog/')
def blog():
    return redirect('http://dhilipsiva.blogspot.com')


'''
This is for pintrest verification!
'''
@app.route('/pinterest-b9898.html')
def DSBarChart():
    return render_template('pinterest-b9898.html')


@app.after_request
def add_header(response):
    response.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    response.headers['Cache-Control'] = 'public, max-age=600'
    return response


@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404


if __name__ == '__main__':
    app.run(
        debug=True,
        host='0.0.0.0',
        port=8888)
