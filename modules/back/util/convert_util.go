package util

import (
	"unicode"
)

// 先頭1文字のみを大文字に変換
func FirstOnlyToUpper(s string) string {
	// 対象文字列の全体の長さを取得
	targetLen := len([]rune(s))
	// 先頭1文字を抽出
	topRunes := []rune(s)[:1]
	// 先頭1文字変換用
	upperTop := ""
	if unicode.IsLetter(topRunes[0]) {
		// 変換可能文字列であれば、変換して追記
		upperTop = string(unicode.ToUpper(topRunes[0]))
	} else {
		// 変換できない場合は、そのまま追記
		upperTop = s
	}

	if targetLen <= 1 {
		// 対象文字列が1文字以下であれば、そのまま返却
		return upperTop
	} else {
		// 対象文字列が1文字超過であれば、先頭1文字＋その後の文字列を結合して返却
		remainingRunes := []rune(s)[1:]
		remaining := string(remainingRunes)
		return upperTop + remaining
	}
}

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
