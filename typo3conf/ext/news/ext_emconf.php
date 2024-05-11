<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "news".
 *
 * Auto generated 10-05-2024 22:43
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array (
  'title' => 'News system',
  'description' => 'Versatile news system based on Extbase & Fluid and using the latest technologies provided by TYPO3 CMS.',
  'category' => 'fe',
  'version' => '11.4.1',
  'state' => 'stable',
  'uploadfolder' => false,
  'clearcacheonload' => true,
  'author' => 'Georg Ringer',
  'author_email' => 'mail@ringer.it',
  'author_company' => NULL,
  'constraints' => 
  array (
    'depends' => 
    array (
      'php' => '7.4.0-8.3.99',
      'typo3' => '11.5.19-12.9.99',
      'backend' => '11.5.19-12.9.99',
      'extbase' => '11.5.19-12.9.99',
      'fluid' => '11.5.19-12.9.99',
      'frontend' => '11.5.19-12.9.99',
    ),
    'suggests' => 
    array (
      'rx_shariff' => '12.0.0-14.99.99',
      'news_tagsuggest' => '1.0.0-1.99.99',
      'numbered_pagination' => '1.0.1-1.99.99',
    ),
    'conflicts' => 
    array (
    ),
  ),
);

