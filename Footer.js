import React from 'react';

class Footer extends React.Component {
  render() {
    return (
			<footer className="footer">
	            <div className="container-fluid">
	                <nav className="pull-left">
	                    <ul>
	                        <li>
	                            <a href="http://www.creative-tim.com">
	                                Creative Tim
	                            </a>
	                        </li>
	                        <li>
	                            <a href="http://blog.creative-tim.com">
	                               Blog
	                            </a>
	                        </li>
	                        <li>
	                            <a href="http://www.creative-tim.com/license">
	                                Licenses
	                            </a>
	                        </li>
	                    </ul>
	                </nav>
					<div className="copyright pull-right">
	                    © <script async="" src="//www.google-analytics.com/analytics.js"></script><script>document.write(new Date().getFullYear())</script>2016, made with <i className="fa fa-heart heart"></i> by <a href="http://www.creative-tim.com">Creative Tim</a>
	                </div>
	            </div>
	        </footer>
    );
  }
}

export default (Footer);