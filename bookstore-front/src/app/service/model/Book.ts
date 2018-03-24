/**
 * BookStore APIs
 * BookStore APIs exposed from a Java EE back-end to an Angular front-end
 *
 * OpenAPI spec version: 1.0.0
 * Contact: antonio.goncalves@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
import * as models from './models';

/**
 * Book resource representation
 */
export interface Book {
    

    id?: number;

    /**
     * Title of the Book
     */
    title?: string;

    /**
     * Description of the book
     */
    description?: string;

    unitCost?: number;

    isbn?: string;

    publicationDate?: Date;

    nbOfPages?: number;

    imageURL?: string;

    language?: Book.LanguageEnum;
}
export namespace Book {

    export enum LanguageEnum { 
        ENGLISH = <any> 'ENGLISH',
        FRENCH = <any> 'FRENCH',
        SPANISH = <any> 'SPANISH',
        PORTUGUESE = <any> 'PORTUGUESE',
        ITALIAN = <any> 'ITALIAN',
        FINISH = <any> 'FINISH',
        GERMAN = <any> 'GERMAN',
        DEUTSCH = <any> 'DEUTSCH',
        RUSSIAN = <any> 'RUSSIAN',
    }
}
