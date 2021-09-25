package util

import (
	"unicode"
)

// LowerSnakeCase への変換
func ToLowerSnakeCase(s string) string {
	var res = make([]rune, 0, len(s))
	var p = '_'
	for i, r := range s {
		if !unicode.IsLetter(r) && !unicode.IsDigit(r) {
			// 文字列がUnicodeでも数値でもない場合、アンダースコアを追加
			res = append(res, '_')
		} else if unicode.IsUpper(r) && i > 0 {
			// 文字が大文字であり、1文字目でない場合
			if unicode.IsLetter(p) && !unicode.IsUpper(p) || unicode.IsDigit(p) {
				// Unicodeかつ前の文字列が大文字でなく、数値であればアンダースコアと小文字化した文字を追加
				res = append(res, '_', unicode.ToLower(r))
			} else {
				// そのまま追記
				res = append(res, unicode.ToLower(r))
			}
		} else {
			// Unicodeで大文字でなかったら小文字化して単純追加
			res = append(res, unicode.ToLower(r))
		}

		p = r
	}
	return string(res)
}

// UpperSnakeCase への変換
func ToUpperSnakeCase(s string) string {
	var res = make([]rune, 0, len(s))
	var p = '_'
	for i, r := range s {
		if !unicode.IsLetter(r) && !unicode.IsDigit(r) {
			res = append(res, '_')
		} else if unicode.IsUpper(r) && i > 0 {
			if unicode.IsLetter(p) && !unicode.IsUpper(p) || unicode.IsDigit(p) {
				res = append(res, '_', unicode.ToUpper(r))
			} else {
				res = append(res, unicode.ToUpper(r))
			}
		} else {
			res = append(res, unicode.ToUpper(r))
		}

		p = r
	}
	return string(res)
}