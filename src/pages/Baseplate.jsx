import React, { Component } from 'react';
import './../assets/styles.css';
import BaseplateColors from '../components/Colors';
import ButtonVariationsOutput from '../components/ButtonVariationsOutput';
import ColorCombinations from '../components/ColorCombinations';
import Layout from "../components/layout";
import { getWindow } from 'ssr-window';
const window = getWindow();

export default class Baseplate extends Component {
    render() {
        return (
            <Layout>
                <div className='baseplate'>
                    <div className='baseplate-main container-lg justify-content-center'>
                        <div className='typography sectionTitle'>
                            <h2>Typography</h2>
                            <h3>Font Styles</h3>
                            <div className='row fontStyles section'>
                                <div className={ 'offset-md-4 col' }>
                                    <h4>Headings</h4>
                                </div>
                                <div className={ 'col' }>
                                    <h4>Body</h4>
                                </div>
                            </div>
                            <div className={ 'row' }>
                                <div className={ 'offset-md-4 col' }>
                                    <h4>Lora</h4>
                                </div>
                                <div className={ 'col' }>
                                    <p style={ { fontSize: 30 } }>Assistant</p>
                                </div>
                            </div>

                            <div className='headingStyles section'>
                                <h3>Heading Styles</h3>
                                <div className={ 'row' }>
                                    <div className={ 'offset-1 col-12 col-md-6' }>
                                        <div className={ 'row' }>
                                            <h3>Desktop</h3>
                                        </div>
                                        <div className={ 'row' }>
                                            <h1 className={ 'showcase' }>H1 Heading - 60px</h1>
                                        </div>
                                        <div className={ 'row' }>
                                            <h2 className={ 'showcase' }>H2 Heading - 50px</h2>
                                        </div>
                                        <div className={ 'row' }>
                                            <h3 className={ 'showcase' }>H3 Heading - 40px</h3>
                                        </div>
                                        <div className={ 'row' }>
                                            <h4>H4 Heading - 30px</h4>
                                        </div>
                                        <div className={ 'row' }>
                                            <h5>H5 Heading - 22px</h5>
                                        </div>
                                        <div className={ 'row' }>
                                            <h6>H6 Heading - 16px</h6>
                                        </div>
                                    </div>
                                    <div className={ 'offset-1 col-10 offset-md-0 col-md-5' }>
                                        <div className={ 'row' }>
                                            <h3>Mobile</h3>
                                        </div>
                                        <div className={ 'row' }>
                                            <h1 className={ 'baseplateHeading showcase' }>H1 Heading - 50px</h1>
                                        </div>
                                        <div className={ 'row' }>
                                            <h2 className={ 'baseplateHeading showcase' }>H2 Heading - 40px</h2>
                                        </div>
                                        <div className={ 'row' }>
                                            <h3 className={ 'baseplateHeading showcase' }>H3 Heading - 30px</h3>
                                        </div>
                                        <div className={ 'row' }>
                                            <h4 className={ 'baseplateHeading' }>H4 Heading - 24px</h4>
                                        </div>
                                        <div className={ 'row' }>
                                            <h5 className={ 'baseplateHeading' }>H5 Heading - 18px</h5>
                                        </div>
                                        <div className={ 'row' }>
                                            <h6 className={ 'baseplateHeading' }>H6 Heading - 12px</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3>List Styles</h3>
                            <div className='row listStyles section justify-space-between'>
                                <div className={ 'offset-2 col' }>
                                    <h4>Bullet List</h4>
                                    <ul>
                                        <li>List Item</li>
                                        <li>List Item</li>
                                        <li>List Item</li>
                                    </ul>
                                </div>
                                <div className={ 'col' }>
                                    <h4>Numbered List</h4>
                                    <ol>
                                        <li>List Item</li>
                                        <li>List Item</li>
                                        <li>List Item</li>
                                    </ol>
                                </div>
                            </div>

                            <h3>Block Quote Styles</h3>
                            <div className='row blockQuoteStyles section'>
                            </div>
                        </div>

                        <div className='colors'>
                            <h2>Colors</h2>
                            <BaseplateColors />
                        </div>

                        <div className='Controls'>
                            <h2>Controls</h2>

                            <div className='buttons'>
                                <h3>Buttons</h3>
                                <div className={ 'row justify-content-around' }>
                                    <ButtonVariationsOutput buttonName={ 'Contained' } />
                                    <ButtonVariationsOutput buttonName={ 'Outline' } />
                                    <ButtonVariationsOutput buttonName={ 'Text' } />
                                    <ButtonVariationsOutput buttonName={ 'Arrow' } />
                                    <ButtonVariationsOutput buttonName={ 'Icon' } />
                                    <ButtonVariationsOutput buttonName={ 'Round' } />
                                    <ButtonVariationsOutput buttonName={ 'Square' } />
                                </div>

                                <div className='colorCombinations'>
                                    <h2>Color Combinations</h2>
                                    <ColorCombinations />
                                </div>

                                <div className='socailLogins'>
                                    <h3>Social Login Buttons</h3>
                                </div>
                                <div className={ 'row' }>
                                    <div className={ 'col' }></div>
                                    <div className={ 'col' }>
                                        <h4>Light</h4>
                                    </div>
                                    <div className={ 'col' }>
                                        <h4>Dark</h4>
                                    </div>
                                </div>
                                <div className={ 'row' }>
                                    <div className={ 'col' }>
                                        <h4>Google</h4>
                                    </div>
                                    <div className={ 'col' }>
                                        <a href={window.location.href} className={ 'socialLogin googleLoginLight' }>.</a>
                                    </div>
                                    <div className={ 'col' }>
                                        <a href={window.location.href} className={ 'socialLogin googleLoginDark' }>.</a>
                                    </div>
                                </div>
                                <div className={ 'row' }>
                                    <div className={ 'col' }>
                                        <h4>Twitter</h4>
                                    </div>
                                    <div className={ 'col' }>
                                        <a href={window.location.href} className={ 'socialLogin twitterLoginLight' }>.</a>
                                    </div>
                                    <div className={ 'col' }>
                                        <a href={window.location.href} className={ 'socialLogin twitterLoginLight' }>.</a>
                                    </div>
                                </div>
                                <div className={ 'row' }>
                                    <div className={ 'col' }>
                                        <h4>Facebook</h4>
                                    </div>
                                    <div className={ 'col' }>
                                        <a href={window.location.href} className={ 'socialLogin facebookLoginLight' }>.</a>
                                    </div>
                                    <div className={ 'col' }>
                                        <a href={window.location.href} className={ 'socialLogin facebookLoginLight' }>.</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='stylisticFeatures'>
                            <h2>Stylistic features</h2>
                            <div className=''>
                                <h3>Shadow</h3>
                                <div className='row'>
                                    <div className={ 'col' }>
                                        <h4>Buttons</h4>
                                    </div>
                                    <div className={ 'col' }>
                                        <a href={window.location.href} className={ 'btn btn-small shadow' }>.</a>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className={ 'col' }>
                                        <h4>FAB</h4>
                                    </div>
                                    <div className={ 'col' }>
                                        <a href={window.location.href} className={ 'btn btn-circle shadow' }>.</a>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className={ 'col' }>
                                        <h4>Card</h4>
                                    </div>
                                    <div className={ 'col' }>
                                        <a href={window.location.href} className={ 'btn shadow' }>.</a>
                                    </div>
                                </div>
                            </div>
                            <div className='borderRadius'>
                                <h3>Border Radius</h3>
                                <div className='row'>
                                    <div className={ 'col' }>
                                        <h4>Buttons</h4>
                                    </div>
                                    <div className={ 'col' }>
                                        <a href={window.location.href} className={ 'btn btn-small' }>.</a>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className={ 'col' }>
                                        <h4>Cards</h4>
                                    </div>
                                    <div className={ 'col' }>
                                        <a href={window.location.href} className={ 'btn ' }>.</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='inputs'>
                            <h2>Inputs</h2>
                            <div className='formFields'>
                                <h3>Form Fields</h3>
                                <div className='inputField'>
                                    <div className={ 'row' }>
                                        <div className={ 'col' }></div>
                                        <div className={ 'col' }>
                                            <h4>Idle</h4>
                                        </div>
                                        <div className={ 'col' }>
                                            <h4>Hover</h4>
                                        </div>
                                        <div className={ 'col' }>
                                            <h4>Active</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='inputField'>
                                    <div className={ 'row' }>
                                        <div className={ 'col' }>
                                            <h4>Input Field</h4>
                                        </div>
                                        <div className={ 'col' }>
                                            <input type={ 'text' } />
                                        </div>
                                        <div className={ 'col' }>
                                            <input type={ 'text' } />
                                        </div>
                                        <div className={ 'col' }>
                                            <input type={ 'text' } />
                                        </div>
                                    </div>
                                </div>
                                <div className='searchField'>
                                    <div className={ 'row' }>
                                        <div className={ 'col' }>
                                            <h4>Search Field</h4>
                                        </div>
                                        <div className={ 'col' }>
                                            <input type={ 'search' } />
                                        </div>
                                        <div className={ 'col' }>
                                            <input type={ 'search' } />
                                        </div>
                                        <div className={ 'col' }>
                                            <input type={ 'search' } />
                                        </div>
                                    </div>
                                </div>
                                <div className='textArea'>
                                    <div className={ 'row' }>
                                        <div className={ 'col' }>
                                            <h4>Text Area</h4>
                                        </div>
                                        <div className={ 'col' }>
                                            <textarea rows={ 4 }></textarea>
                                        </div>
                                        <div className={ 'col' }>
                                            <textarea rows={ 4 }></textarea>
                                        </div>
                                        <div className={ 'col' }>
                                            <textarea rows={ 4 }></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className='dropdown'>
                                    <div className={ 'row' }>
                                        <div className={ 'col' }>
                                            <h4>Dropdown</h4>
                                        </div>
                                        <div className={ 'col' }>
                                            <select>
                                                <option value='option'>option</option>
                                                <option value='option'>option</option>
                                                <option value='option'>option</option>
                                            </select>
                                        </div>
                                        <div className={ 'col' }>
                                            <select>
                                                <option value='option'>option</option>
                                                <option value='option'>option</option>
                                                <option value='option'>option</option>
                                            </select>
                                        </div>
                                        <div className={ 'col' }>
                                            <select>
                                                <option value='option'>option</option>
                                                <option value='option'>option</option>
                                                <option value='option'>option</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='submit'>
                                    <div className={ 'row' }>
                                        <div className={ 'col' }>
                                            <h4>Submit</h4>
                                        </div>
                                        <div className={ 'col' }>
                                            <input type={ 'submit' } />
                                        </div>
                                        <div className={ 'col' }>
                                            <input type={ 'submit' } />
                                        </div>
                                        <div className={ 'col' }>
                                            <input type={ 'submit' } />
                                        </div>
                                    </div>
                                </div>
                                <div className='dragAreaFiles'>
                                    <div className={ 'row' }>
                                        <div className={ 'col' }>
                                            <h4>Drag Area - Files</h4>
                                        </div>
                                        <div className={ 'col' }>
                                            <form className='box' method='post' action='' encType='multipart/form-data'>
                                                <div className='box__input'>
                                                    <input type='file' name='files[]' id='file'
                                                        data-multiple-caption='{count} files selected' multiple />
                                                    <label htmlFor='file'><strong>Choose a file</strong><span
                                                    > or drag it here</span>.</label>
                                                    <a href={window.location.href} className='btn btn-small' type='submit'>Upload</a>
                                                </div>
                                            </form>
                                        </div>
                                        <div className={ 'col' }>
                                            <form className='box' method='post' action='' encType='multipart/form-data'>
                                                <div className='box__input'>
                                                    <input type='file' name='files[]' id='file'
                                                        data-multiple-caption='{count} files selected' multiple />
                                                    <label htmlFor='file'><strong>Choose a file</strong><span
                                                    > or drag it here</span>.</label>
                                                    <a href={window.location.href} className='btn btn-small' type='submit'>Upload</a>
                                                </div>
                                            </form>
                                        </div>
                                        <div className={ 'col' }>
                                            <form className='box' method='post' action='' encType='multipart/form-data'>
                                                <div className='box__input'>
                                                    <input type='file' name='files[]' id='file'
                                                        data-multiple-caption='{count} files selected' multiple />
                                                    <label htmlFor='file'><strong>Choose a file</strong><span
                                                    > or drag it here</span>.</label>
                                                    <a href={window.location.href} className='btn btn-small' type='submit'>Upload</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className='dragAreaImages'>
                                    <div className={ 'row' }>
                                        <div className={ 'col' }>
                                            <h4>Drag Area - Images</h4>
                                        </div>
                                        <div className={ 'col' }>
                                            <form className='box' method='post' action='' encType='multipart/form-data'>
                                                <div className='box__input'>
                                                    <input type='file' name='files[]' id='file'
                                                        data-multiple-caption='{count} files selected' multiple />
                                                    <label htmlFor='file'><strong>Choose an image</strong><span
                                                    > or drag it here</span>.</label>
                                                    <a href={window.location.href} className='btn btn-small' type='submit'>Upload</a>
                                                </div>
                                            </form>
                                        </div>
                                        <div className={ 'col' }>
                                            <form className='box' method='post' action='' encType='multipart/form-data'>
                                                <div className='box__input'>
                                                    <input type='file' name='files[]' id='file'
                                                        data-multiple-caption='{count} files selected' multiple />
                                                    <label htmlFor='file'><strong>Choose an image</strong><span
                                                    > or drag it here</span>.</label>
                                                    <a href={window.location.href} className='btn btn-small' type='submit'>Upload</a>
                                                </div>
                                            </form>
                                        </div>
                                        <div className={ 'col' }>
                                            <form className='box' method='post' action='' encType='multipart/form-data'>
                                                <div className='box__input'>
                                                    <input type='file' name='files[]' id='file'
                                                        data-multiple-caption='{count} files selected' multiple />
                                                    <label htmlFor='file'><strong>Choose an image</strong><span
                                                    > or drag it here</span>.</label>
                                                    <a href={window.location.href} className='btn btn-small' type='submit'>Upload</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='checkBoxes'>
                                <div className={ 'row' }>
                                    <div className={ 'col' }>
                                        <h4>Check Boxes</h4>
                                    </div>
                                    <div className={ 'col' }>
                                        <input type={ 'checkbox' } />
                                    </div>
                                    <div className={ 'col' }>
                                        <input type={ 'checkbox' } />
                                    </div>
                                    <div className={ 'col' }>
                                        <input type={ 'checkbox' } />
                                    </div>
                                </div>
                            </div>
                            <div className='quantityCounter'>
                                <div className={ 'row' }>
                                    <div className={ 'col' }>
                                        <h4>Quantity Counter</h4>
                                    </div>
                                    <div className={ 'col' }>
                                        <input type={ 'number' } />
                                    </div>
                                    <div className={ 'col' }>
                                        <input type={ 'number' } />
                                    </div>
                                    <div className={ 'col' }>
                                        <input type={ 'number' } />
                                    </div>
                                </div>
                            </div>
                            <div className='radioButtons'>
                                <div className={ 'row' }>
                                    <div className={ 'col' }>
                                        <h4>Radio Button</h4>
                                    </div>
                                    <div className={ 'col' }>
                                        <input type={ 'radio' } />
                                    </div>
                                    <div className={ 'col' }>
                                        <input type={ 'radio' } />
                                    </div>
                                    <div className={ 'col' }>
                                        <input type={ 'radio' } />
                                    </div>
                                </div>
                            </div>

                            <div className='toggles'>
                                <h4>Toggles</h4>
                                <div className={ 'row' }>
                                    <div className={ 'col' }>
                                        <h5> Square Toggle</h5>
                                    </div>
                                    <div className={ 'col' }>
                                        <label className={ 'switch' }>
                                            <input type={ 'checkbox' } />
                                            <span className={ 'slider' }></span>
                                        </label>
                                    </div>
                                    <div className={ 'col' }>
                                        <label className={ 'switch' }>
                                            <input type={ 'checkbox' } />
                                            <span className={ 'slider' }></span>
                                        </label>
                                    </div>
                                    <div className={ 'col' }>
                                        <label className={ 'switch' }>
                                            <input type={ 'checkbox' } />
                                            <span className={ 'slider' }></span>
                                        </label>
                                    </div>
                                </div>

                                <div className={ 'row' }>
                                    <div className={ 'col' }>
                                        <h5> Round Toggle</h5>
                                    </div>
                                    <div className={ 'col' }>
                                        <label className={ 'switch' }>
                                            <input type={ 'checkbox' } />
                                            <span className={ 'slider round' }></span>
                                        </label>
                                    </div>
                                    <div className={ 'col' }>
                                        <label className={ 'switch' }>
                                            <input type={ 'checkbox' } />
                                            <span className={ 'slider round' }></span>
                                        </label>
                                    </div>
                                    <div className={ 'col' }>
                                        <label className={ 'switch' }>
                                            <input type={ 'checkbox' } />
                                            <span className={ 'slider round' }></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='sliders'>
                                <h4>Sliders</h4>
                            </div>

                            <div className='inputColorVariations'>
                                <h3>Set Color Variations</h3>
                                <div className={ 'row' }>
                                    <div className={ 'col' }>
                                        <h4>Primary 1 </h4>
                                        <form>
                                            <div className={ 'row' }>
                                                <input type={ 'text' } />
                                            </div>
                                            <div className={ 'row' }>
                                                <input type={ 'search' } />
                                            </div>
                                            <div className={ 'row' }>
                                                <textarea rows={ '4' }></textarea>
                                            </div>
                                            <div className={ 'row' }>
                                                <select>
                                                    <option value={ 'option' }>option</option>
                                                    <option value={ 'option' }>option</option>
                                                    <option value={ 'option' }>option</option>
                                                </select>
                                            </div>
                                            <div className={ 'row' }>
                                                <input type={ 'submit' } />
                                            </div>
                                            <div className={ 'row' }>
                                                <div className='box__input'>
                                                    <input type='file' name='files[]' id='file'
                                                        data-multiple-caption='{count} files selected' multiple />
                                                    <label htmlFor='file'><strong>Choose an image</strong><span
                                                    > or drag it here</span>.</label>
                                                    <a href={window.location.href} className='btn btn-small' type='submit'>Upload</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className={ 'col' }>
                                        <h4>Primary 2 </h4>
                                        <form>
                                            <div className={ 'row' }>
                                                <input type={ 'text' } />
                                            </div>
                                            <div className={ 'row' }>
                                                <input type={ 'search' } />
                                            </div>
                                            <div className={ 'row' }>
                                                <textarea rows={ '4' }></textarea>
                                            </div>
                                            <div className={ 'row' }>
                                                <select>
                                                    <option value={ 'option' }>option</option>
                                                    <option value={ 'option' }>option</option>
                                                    <option value={ 'option' }>option</option>
                                                </select>
                                            </div>
                                            <div className={ 'row' }>
                                                <input type={ 'submit' } />
                                            </div>
                                            <div className={ 'row' }>
                                                <div className='box__input'>
                                                    <input type='file' name='files[]' id='file'
                                                        data-multiple-caption='{count} files selected' multiple />
                                                    <label htmlFor='file'><strong>Choose an image</strong><span
                                                    > or drag it here</span>.</label>
                                                    <a href={window.location.href} className='btn btn-small' type='submit'>Upload</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className={ 'col' }>
                                        <h4>Primary 3 </h4>
                                        <form>
                                            <div className={ 'row' }>
                                                <input type={ 'text' } />
                                            </div>
                                            <div className={ 'row' }>
                                                <input type={ 'search' } />
                                            </div>
                                            <div className={ 'row' }>
                                                <textarea rows={ '4' }></textarea>
                                            </div>
                                            <div className={ 'row' }>
                                                <select>
                                                    <option value={ 'option' }>option</option>
                                                    <option value={ 'option' }>option</option>
                                                    <option value={ 'option' }>option</option>
                                                </select>
                                            </div>
                                            <div className={ 'row' }>
                                                <input type={ 'submit' } />
                                            </div>
                                            <div className={ 'row' }>
                                                <div className='box__input'>
                                                    <input type='file' name='files[]' id='file'
                                                        data-multiple-caption='{count} files selected' multiple />
                                                    <label htmlFor='file'><strong>Choose an image</strong><span
                                                    > or drag it here</span>.</label>
                                                    <a href={window.location.href} className='btn btn-small' type='submit'>Upload</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className={ 'row' }>
                                <div className={ 'col-10 col-md-6 col-lg-4' }>
                                    <div className='calendar'>
                                        <h4>Calendar</h4>
                                        <div className='month'>
                                            <ul>
                                                <li className='prev'>&#10094;</li>
                                                <li className='next'>&#10095;</li>
                                                <li><span>2017</span></li>
                                            </ul>
                                        </div>

                                        <ul className='weekdays'>
                                            <li>Mo</li>
                                            <li>Tu</li>
                                            <li>We</li>
                                            <li>Th</li>
                                            <li>Fr</li>
                                            <li>Sa</li>
                                            <li>Su</li>
                                        </ul>

                                        <ul className='days'>
                                            <li>1</li>
                                            <li>2</li>
                                            <li>3</li>
                                            <li>4</li>
                                            <li>5</li>
                                            <li>6</li>
                                            <li>7</li>
                                            <li>8</li>
                                            <li>9</li>
                                            <li><span className={ 'active' }>10</span></li>
                                            <li>11</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='navigation'>
                            <h2>Navigation</h2>
                            <div className='textLink'>
                                <div className='row textLinkParagraph'>
                                    <div className={ 'col' }>
                                        <h4>Text Link: Paragraph</h4>
                                    </div>
                                    <div className={ 'col bg-white text-secondary' }>
                                        <div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.
                                                <a href={window.location.href}>Ut enim
                                                    ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat.
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row textLinkFooter'>
                                    <div className={ 'col' }>
                                        <h4>Text Link: Footer</h4>
                                    </div>
                                    <div className={ 'col bg-dark' }>
                                        <div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.
                                                <a href={window.location.href}>Ut enim
                                                    ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat.
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={ 'row paginationDots' }>
                                <div className={ 'col' }>
                                    <h4>Pagination: Dots</h4>
                                </div>

                                <div className={'col'}>
                                    <div className="pagination dots">
                                        <a className={'paginationNav'} href={window.location.href}>&laquo;</a>
                                        <a href={window.location.href}>.</a>
                                        <a className="active" href={window.location.href}>.</a>
                                        <a href={window.location.href}>.</a>
                                        <a href={window.location.href}>.</a>
                                        <a href={window.location.href}>.</a>
                                        <a href={window.location.href}>.</a>
                                        <a className={'paginationNav'} href={window.location.href}>&raquo;</a>

                                    </div>
                                </div>
                            </div>
                            <div className={ 'row paginationNumbers' }>
                                <div className={ 'col' }>
                                    <h4>Pagination: Number</h4>
                                </div>
                                <div className={'col'}>
                                    <div className="pagination numbered">
                                        <a href={window.location.href}>&laquo;</a>
                                        <a href={window.location.href}>1</a>
                                        <a className="active" href={window.location.href}>2</a>
                                        <a href={window.location.href}>3</a>
                                        <a href={window.location.href}>4</a>
                                        <a href={window.location.href}>5</a>
                                        <a href={window.location.href}>6</a>
                                        <a href={window.location.href}>&raquo;</a>
                                    </div>
                                </div>
                            </div>

                            <div className='tabs'>
                                <h4>Tabs</h4>
                            </div>

                            <div className='arrowButtons'>
                                <h4>Arrow Buttons</h4>
                            </div>

                            <div className='progressIndicator'>
                                <h4>Progress Indicator</h4>
                            </div>

                            <div className='breadcrumbs'>
                                <h4>Breadcrumbs</h4>
                            </div>

                            <div className='socialIcons'>
                                <h4>Social Icons</h4>
                            </div>
                        </div>

                        <div className='content'>
                            <h2>Content</h2>
                            <div className='accordions'>
                                <h4>Accordions</h4>
                            </div>
                            <div className='toolTips'>
                                <div className='toolTipsLarge'>
                                    <h4>Tooltips Large</h4>
                                </div>
                                <div className='toolTipsSmall'>
                                    <h4>Tooltips Small</h4>
                                </div>
                            </div>
                            <div className='placeholders'>
                                <h4>Placeholders</h4>
                            </div>
                            <div className='loaders'>
                                <h4>Loaders</h4>
                            </div>
                            <div className='notifications'>
                                <h4>Notifications</h4>
                            </div>
                            <div className='videoPlayer'>
                                <h4>Video Player</h4>
                            </div>
                            <div className='tables'>
                                <div className='tablesFill'>
                                    <h4>Tables: Fill</h4>
                                </div>
                                <div className='tablesOutline'>
                                    <h4>Tables: Outline</h4>
                                </div>
                            </div>
                        </div>
                        ;

                        <div className='modules'>
                            <h2>Modules</h2>

                            <div className='topNav'>
                                <h3>Top Nav</h3>
                                <div className='logoLeft'>
                                    <h4>Logo Left</h4>
                                </div>
                                <div className='logoMiddle'>
                                    <h4>Logo Middle</h4>
                                </div>
                                <div className='logoRight'>
                                    <h4>Logo Right</h4>
                                </div>
                            </div>

                            <div className='topNavMinimal'>
                                <h3>Top Nav Minimal</h3>
                                <div className='logoLeft'>
                                    <h4>Logo Left</h4>
                                </div>
                                <div className='logoMiddle'>
                                    <h4>Logo Middle</h4>
                                </div>
                                <div className='logoRight'>
                                    <h4>Logo Right</h4>
                                </div>
                            </div>

                            <div className='footer'>
                                <h3>Footer</h3>
                            </div>

                            <div className='textBlock'>
                                <h3>Text Block</h3>
                                <div className='desktopLeft'>
                                    <h4>Desktop Left</h4>
                                </div>
                                <div className='desktopRight'>
                                    <h4>Desktop Right</h4>
                                </div>
                                <div className='desktopCenter'>
                                    <h4>Desktop Center</h4>
                                </div>
                            </div>

                            <div className='hero'>
                                <h3>Hero</h3>
                                <div className='imageRight'>
                                    <h4>Image Right</h4>
                                </div>
                                <div className='imageCenter'>
                                    <h4>Image Center</h4>
                                </div>
                                <div className='imageLeft'>
                                    <h4>Image Left</h4>
                                </div>
                            </div>

                            <div className='cta'>
                                <h3>CTA</h3>
                                <div className='ctaCenter'>
                                    <h4>CTA Center</h4>
                                </div>
                                <div className='ctaNarrow'>
                                    <h4>CTA Narrow</h4>
                                </div>
                                <div className='ctaForm'>
                                    <h4>CTA Form</h4>
                                </div>
                            </div>

                            <div className='socialProofLogos'>
                                <h3>Social Proof Logos</h3>
                            </div>

                            <div className='feature'>
                                <h3>Features</h3>
                                <div className='featureSplitLeft'>
                                    <h4>Feature Split Left</h4>
                                </div>
                                <div className='featureSplitRight'>
                                    <h4>Feature Split Right</h4>
                                </div>
                                <div className='featureListLeft'>
                                    <h4>Feature List Left</h4>
                                </div>
                                <div className='featureListRight'>
                                    <h4>Feature List Right</h4>
                                </div>
                                <div className='featureQuoteLeft'>
                                    <h4>Feature Quote Left</h4>
                                </div>
                                <div className='featureQuoteRight'>
                                    <h4>Feature Quote Right</h4>
                                </div>
                            </div>

                            <div className='cards'>
                                <h3>Cards</h3>
                            </div>
                            <div className='cardListing'>
                                <h3>Card Listing</h3>
                            </div>
                            <div className='overlays/modals'>
                                <h3>Overlays/Modals</h3>
                                <div className='openedState'>
                                    <h4>Opened State</h4>
                                </div>

                                <div className='filters'>
                                    <h3>Filters</h3>
                                </div>

                                <div className='accordion'>
                                    <h3>Accordion</h3>
                                    <div className='accordionContracted'>
                                        <h4>Accordion Contracted - Desktop</h4>
                                    </div>
                                    <div className='accordionExpanded'>
                                        <h4>Accordion Expanded - Desktop</h4>
                                    </div>
                                </div>

                                <div className='login'>
                                    <h3>Login</h3>
                                </div>

                                <div className='tabs'>
                                    <h3>Tabs</h3>
                                </div>

                                <div className='testimonial'>
                                    <h3>Testimonial</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}
